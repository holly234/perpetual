import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[78vh] place-items-center bg-[#151515] px-3 pb-16 pt-28 text-white">
      <section className="container-page grid gap-8 border border-white/15 p-7 sm:p-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:p-14">
        <div>
          <p className="text-[8rem] font-extrabold leading-none tracking-[-0.08em] text-[color:var(--accent)] sm:text-[12rem]">404</p>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">Page not found</p>
        </div>
        <div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[.94] tracking-[-0.055em] sm:text-6xl">This page is not available.</h1>
          <p className="mt-5 max-w-xl leading-8 text-white/64">Use the links below to return to the main website or start a conversation about your project.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary"><ArrowLeft size={16} className="mr-2" /> Back Home</Link>
            <Link href="/contact" className="btn border border-white/30 bg-transparent text-white hover:border-white">Start a Project <ArrowUpRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
