import { Handlers } from "$fresh/server.ts";
import { default as mailer } from "npm:@sendgrid/mail";

interface ContactData {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  message: string | null;
}

const key = Deno.env.get("SENDGRID_API_KEY");

export const handler: Handlers = {
  async POST(req: Request) {
    const emailData: ContactData = {
      firstName: String(req.headers.get("firstName")),
      lastName: String(req.headers.get("lastName")),
      email: String(req.headers.get("email")),
      message: String(req.headers.get("message")),
    };

    console.log(
      `Name: ${emailData.firstName} ${emailData.lastName}, Email: ${emailData.email}.`,
    );
    console.log(req.referrer);

    if (emailData.email === "null" || emailData.email === null) {
      return new Response("Incorrect data.", { status: 400 });
    }

    try {
      const email = await sendContactEmail(emailData);

      if ("code" in email) {
        return new Response("Unknown error occured.", { status: 500 });
      }

      if ("statusCode" in email[0]) {
        return new Response(null, { status: 204 });
      } else {
        const errorMessage = String(email.message);
        return new Response(
          errorMessage +
            " - if this error persists, please contact admin@jakeabed.dev.",
          { status: 202 },
        );
      }
    } catch (e) {
      console.log(e);
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
