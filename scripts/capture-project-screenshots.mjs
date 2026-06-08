import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const projects = [
  ["vip-rentals", "https://viprentalsno.com"],
  ["car-detailing-demo", "https://demo-car-detailing.vercel.app/"],
  ["dog-groomer-demo", "https://demo-dog-groomer.vercel.app/"],
  ["car-rental-demo", "https://demo-car-rental-ten.vercel.app/"],
  ["futeball-for-all-demo", "https://fj-demo-zeta.vercel.app/"],
  ["canopy-root-arborist-demo", "https://arborist-demo.vercel.app/"],
  ["p-chow-restaurant", "https://r-demo.vercel.app/"]
];

const outputRoot = path.join(process.cwd(), "public", "project-screenshots");
const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const requestedSlug = process.argv[2];
const selectedProjects = requestedSlug
  ? projects.filter(([slug]) => slug === requestedSlug)
  : projects;

if (requestedSlug && selectedProjects.length === 0) {
  throw new Error(`Unknown project slug: ${requestedSlug}`);
}

await mkdir(outputRoot, { recursive: true });

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--disable-dev-shm-usage"]
});

for (const [slug, url] of selectedProjects) {
  const projectDirectory = path.join(outputRoot, slug);
  await mkdir(projectDirectory, { recursive: true });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 960 },
    deviceScaleFactor: 1
  });

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  }

  await page.waitForTimeout(slug === "p-chow-restaurant" ? 5500 : 1800);

  await page.addStyleTag({
    content: `
      html { scroll-behavior: auto !important; }
      * { animation: none !important; transition: none !important; }
    `
  });

  await page.waitForTimeout(400);

  const pageHeight = await page.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );
  const maxScroll = Math.max(0, pageHeight - 960);

  for (let index = 0; index < 5; index += 1) {
    const scrollTop = Math.round((maxScroll * index) / 4);
    await page.evaluate((top) => window.scrollTo(0, top), scrollTop);
    await page.waitForTimeout(450);
    await page.screenshot({
      path: path.join(projectDirectory, `${index + 1}.jpg`),
      type: "jpeg",
      quality: 82
    });
  }

  await page.close();
  console.log(`Captured ${slug}`);
}

await browser.close();
