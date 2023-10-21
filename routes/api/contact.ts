import { Handlers } from "$fresh/server.ts";
import { default as mailer } from "npm:@sendgrid/mail";

interface ContactData {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  message: string | null;
}

Deno.env.set(
  "SENDGRID_API_KEY",
  "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",
);

const key = Deno.env.get("SENDGRID_API_KEY");

export const handler: Handlers = {
  async POST(req: Request) {
    const form = await req.formData();
    if (!form) return new Response("No form data provided.", { status: 403 });
    const emailData: ContactData = {
      firstName: String(form.get("firstName")),
      lastName: String(form.get("lastName")),
      email: String(form.get("email")),
      message: String(form.get("message")),
    };

    try {
      const email = await sendContactEmail(emailData);

      console.log(email);

      if (email.statusCode) {
        return new Response(null, { status: 204 });
      } else {
        const errorMessage = String(email.message);
        return new Response(
          errorMessage +
            " - if this error persists, please contact admin@jakeabed.dev.",
          { status: 403 },
        );
      }
    } catch (e) {
      return new Response(e, { status: 500 });
    }
  },
};

async function sendContactEmail(emailData: ContactData) {
  const sender = emailData.firstName + " " + emailData.lastName;
  const subject = `Hello from ${sender}!`;

  const msg = {
    to: "jakeabed@gmail.com",
    from: "admin@jakeabed.dev",
    subject: subject,
    text: emailData.message + " from " + emailData.email,
    html: `<p>${emailData.message} from ${emailData.email}</>`,
  };

  if (typeof key === "string") mailer.setApiKey(key);
  else throw new Error("Invalid API key.");

  try {
    const email = await mailer.send(msg);
    return email;
  } catch (e) {
    return e;
  }
}
