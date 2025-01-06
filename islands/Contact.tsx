import { useState } from "preact/hooks";
import { escapeHtml } from "https://deno.land/x/escape@1.4.2/mod.ts";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [_formValid, setValidity] = useState(false);
  const [resp, setResp] = useState("");

  function validateContactForm() {
    const form = document.getElementById("contactme") as HTMLFormElement;
    setValidity(form.checkValidity());
    return (form.checkValidity());
  }

  async function sendEmail() {
    setSending(true);
    setResp("");
    const headers = new Headers();
    const firstName = document.querySelector("#first-name") as HTMLInputElement;
    const lastName = document.querySelector("#last-name") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const message = document.querySelector("#message") as HTMLTextAreaElement;
    headers.set("firstName", firstName.value);
    headers.set("lastName", lastName.value);
    headers.set("email", email.value);
    console.log(escapeHtml(message.value));
    headers.set("message", escapeHtml(message.value));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: headers,
    });
    switch (res.status) {
      case 500:
        setResp(
          "Oops! It looks like there was a server error. If this continues, please email admin@jakeabed.dev through your email client of choice.",
        );
        break;
      case 403:
        setResp(
          "We couldn't send your email. It somehow snuck through with bad data. Try again with different values in the form.",
        );
        break;
      case 204:
        setResp("Your email was sent. I'll be in touch as soon as possible!");
        break;
      case 202:
        setResp("Your email was sent. I'll be in touch as soon as possible!");
        break;
      default:
        setResp("Huh? What the heck just happened?!");
        break;
    }
    setSending(false);
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center px-4 py-8 lg:pb-16">
      <div className="max-w-2xl flex flex-col-reverse justify-center w-[90dvw] md:flex-row-reverse md:w-[60dvw] gap-6">
        <form
          id="contactme"
          className="flex flex-col self-center w-full basis-auto shrink bg-deep-black shadow-brutal-light-green rounded-xl grow py-6 px-8 gap-4"
          action="/api/contact"
        >
          <div className="flex flex-col gap-2 flex-auto">
            <label
              className="font-bold text-white"
              for="first-name"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              First Name:
            </label>
            <input
              className="flex-auto text-black rounded-lg px-2 max-w-[300px] shadow-brutal bg-white valid:shadow-brutal-light-green focus-visible:outline-none"
              type="text"
              id="first-name"
              name="firstName"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="last-name"
              className="font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Last Name:
            </label>
            <input
              class="flex-auto text-black rounded-lg px-2 max-w-[300px] shadow-brutal bg-white valid:shadow-brutal-light-green focus-visible:outline-none"
              type="text"
              id="last-name"
              name="lastName"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="email"
              className="font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Email:
            </label>
            <input
              class="flex-auto text-black rounded-lg px-2 max-w-[300px] shadow-brutal bg-white valid:shadow-brutal-light-green focus-visible:outline-none"
              type="email"
              id="email"
              name="email"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="message"
              className="font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Message:
            </label>
            <textarea
              class="flex-auto text-black py-1 px-2 rounded-lg shadow-brutal border-black bg-white valid:shadow-brutal-light-green focus-visible:outline-none"
              id="message"
              name="message"
              minLength={5}
              required={true}
            >
            </textarea>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className={sending
                ? "text-deep-black flex-auto bg-white rounded-xl shadow-brutal font-semibold px-2 py-1 max-w-[300px] animate-pulse"
                : "text-deep-black flex-auto bg-white rounded-xl shadow-brutal font-semibold px-2 py-1 max-w-[300px]"}
              id="submit-contact"
              type="button"
              name="submit"
              onClick={() => {
                if (!validateContactForm()) {
                  return setResp(
                    "Hmmmm... looks like the form is invalid. Try again!",
                  );
                }
                return sendEmail();
              }}
              disabled={sending}
            >
              {sending ? "SUBMITTING" : "SUBMIT"}
            </button>
          </div>
        </form>
        <div className="flex bg-deep-black flex-col justify-center rounded-lg shadow-brutal-light-green h-max px-8 py-4">
          <h2 className="font-extrabold text-2xl text-right leading-[1.6rem] pb-4">
            Contact Me.
          </h2>
          <p className="text-right font-medium leading-[1.35rem]">
            Feel free to reach out about anything whatsoever!
          </p>
          <br />
          <p className="text-right font-medium leading-[1.35rem]">
            Want to chat? Need help on a project? Have a job offer? Whatever the
            reason, I'm always happy to chat.
          </p>
          <br />
          <p className="text-right font-medium leading-[1.35rem]">
            {resp}
          </p>
        </div>
      </div>
    </div>
  );
}
