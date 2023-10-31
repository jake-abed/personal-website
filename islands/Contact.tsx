import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [formValid, setValidity] = useState(false);
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
    headers.set("message", message.value);
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
    <div class="w-screen bg-light-green flex flex-col items-center justify-center px-4 py-16">
      <div class="flex flex-col items-center justify-center w-[90dvw] md:flex-row md:w-[60dvw] gap-8">
        <form
          id="contactme"
          class="flex flex-col shrink-0 bg-red shadow-brutal rounded-xl grow min-w-[300px] py-6 px-8 gap-4"
          action="/api/contact"
        >
          <div class="flex flex-col gap-2 flex-auto">
            <label
              class="font-noto font-bold text-white"
              for="first-name"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              First Name:
            </label>
            <input
              class="flex-auto rounded-lg px-2 max-w-[300px] shadow-brutal valid:shadow-brutal-light-green focus-visible:outline-none"
              type="text"
              id="first-name"
              name="firstName"
              required={true}
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="last-name"
              class="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Last Name:
            </label>
            <input
              class="flex-auto rounded-lg px-2 max-w-[300px] shadow-brutal valid:shadow-brutal-light-green focus-visible:outline-none"
              type="text"
              id="last-name"
              name="lastName"
              required={true}
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="email"
              class="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Email:
            </label>
            <input
              class="flex-auto rounded-lg px-2 max-w-[300px] shadow-brutal valid:shadow-brutal-light-green focus-visible:outline-none"
              type="email"
              id="email"
              name="email"
              required={true}
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="message"
              class="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Message:
            </label>
            <textarea
              class="flex-auto py-1 px-2 rounded-lg shadow-brutal border-black valid:shadow-brutal-light-green focus-visible:outline-none"
              id="message"
              name="message"
              minLength={5}
              required={true}
            >
            </textarea>
          </div>
          <div class="flex flex-col gap-2">
            <button
              class={"flex-auto font-noto font-bold bg-white rounded-xl px-2 py-1 max-w-[300px] focus-visible:outline-none" +
                (sending ? " animate-pulse" : "") +
                (formValid ? " shadow-brutal-light-green" : " shadow-brutal")}
              id="submit-contact"
              type="button"
              name="submit"
              onClick={() => {
                if (!validateContactForm()) return;
                return sendEmail();
              }}
              disabled={sending}
            >
              {sending ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
        <div class="flex flex-col justify-center max-w-lg px-8 py-4">
          <h2 class="font-extrabold text-2xl text-right text-black font-noto leading-[1.6rem] pb-4">
            Contact Me.
          </h2>
          <p class="text-right font-medium text-black font-noto leading-[1.35rem]">
            Feel free to reach out about anything whatsoever!
          </p>
          <p class="text-right font-medium text-black font-noto leading-[1.35rem]">
            Want to chat? Need help on a project? Have a job offer? Whatever the
            reason, I'm always happy to chat.
          </p>
          <br></br>
          <p class="text-right font-medium text-black font-noto leading-[1.35rem]">
            {resp
              ? resp
              : sending
              ? "You're trying to send me a message!"
              : "You haven't sent a message yet!"}
          </p>
        </div>
      </div>
    </div>
  );
}
