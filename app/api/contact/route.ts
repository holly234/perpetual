import { NextResponse } from "next/server";

const fallbackWebhookUrl = "https://kessie20.app.n8n.cloud/webhook-test/8d7d031f-52bf-4045-9beb-e0f2c7544e22";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  project?: unknown;
  message?: unknown;
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const contact = {
    name: cleanText(payload.name),
    email: cleanText(payload.email),
    project: cleanText(payload.project),
    message: cleanText(payload.message)
  };

  if (!contact.name || !contact.email || !contact.project || !contact.message) {
    return NextResponse.json({ message: "Please fill out every field." }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL || fallbackWebhookUrl;

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Contact automation is waiting for the n8n webhook URL." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...contact,
        source: "perpetual-dev-contact-form",
        submittedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      return NextResponse.json({ message: "n8n did not accept the submission." }, { status: 502 });
    }

    return NextResponse.json({ message: "Message sent." });
  } catch {
    return NextResponse.json({ message: "Could not reach the contact automation." }, { status: 502 });
  }
}
