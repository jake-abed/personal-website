import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [resp, setResp] = useState("");

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
    <div className="w-screen bg-light-green flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center justify-center w-[90dvw] md:flex-row md:w-[60dvw] gap-8">
        <form
          id="contactme"
          className="flex flex-col shrink-0 bg-red shadow-brutal rounded-xl grow min-w-[300px] py-6 px-8 gap-4"
          action="/api/contact"
        >
          <div className="flex flex-col gap-2 flex-auto">
            <label
              className="font-noto font-bold text-white"
              for="first-name"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              First Name:
            </label>
            <input
              className="flex-auto rounded-lg px-2 max-w-[300px]"
              type="text"
              id="first-name"
              name="firstName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="last-name"
              className="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Last Name:
            </label>
            <input
              className="flex-auto rounded-lg px-2 max-w-[300px]"
              type="text"
              id="last-name"
              name="lastName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="email"
              className="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Email:
            </label>
            <input
              className="flex-auto rounded-lg px-2 max-w-[300px]"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="message"
              className="font-noto font-bold text-white"
              style="filter: drop-shadow(0px 0px 2px black);"
            >
              Message:
            </label>
            <textarea class="flex-auto rounded-lg" id="message" name="message">
            </textarea>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className={sending
                ? "flex-auto bg-white rounded-xl px-2 py-1 max-w-[300px] animate-pulse"
                : "flex-auto bg-white rounded-xl px-2 py-1 max-w-[300px]"}
              id="submit-contact"
              type="button"
              name="submit"
              onClick={sendEmail}
              disabled={sending}
            >
              {sending ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center px-8 py-4">
          <h2 className="font-extrabold text-2xl text-right text-black font-noto leading-[1.6rem] pb-4">
            Contact Me.
          </h2>
          <p className="text-right font-medium text-black font-noto leading-[1.35rem]">
            Feel free to reach out about anything whatsoever!
          </p>
          <p className="text-right font-medium text-black font-noto leading-[1.35rem]">
            Want to chat? Need help on a project? Have a job offer? Whatever the
            reason, I'm always happy to chat.
          </p>
          <p className="text-right font-medium text-black font-noto leading-[1.35rem]">
            {resp}
          </p>
        </div>
      </div>
    </div>
  );
}
