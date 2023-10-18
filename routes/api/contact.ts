import { Handlers } from "$fresh/server.ts";
import { sendSimpleMail } from "https://deno.land/x/sendgrid@0.0.3/mod.ts";

interface ContactData {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  message: string | null;
}

interface SGError {
  message: string;
  field: unknown;
  help: unknown;
}

interface SGResp {
  success: boolean;
  errors?: Array<SGError>;
}

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

    const email: SGResp = await sendContactEmail(emailData);

    console.log(email);

    if (email.success) {
      return new Response(null, { status: 204 });
    } else {
      const errorMessage = email.errors?.map((entry) => entry?.message).join(
        ", ",
      );
      return new Response(
        errorMessage +
          " - if this error persists, please contact admin@jakeabed.dev.",
        { status: 403 },
      );
    }
  },
};

async function sendContactEmail(emailData: ContactData) {
  const sender = emailData.firstName + " " + emailData.lastName;
  const subject = `Hello from ${sender}!`;

  const email = await sendSimpleMail(
    {
      subject: subject,
      to: [{ email: "jakeabed@gmail.com" }],
      from: { email: "admin@jakeabed.dev" },
      content: [
        {
          type: "text/plain",
          value: emailData.message + " from " + emailData.email,
        },
        {
          type: "text/html",
          value: `<p>${emailData.message} from ${emailData.email}</>`,
        },
      ],
    },
    {
      apiKey: key + "doog",
    },
  );

  return email as SGResp;
}
