import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [send, setSend] = useState("inactive");

  return (
    <div class="w-screen bg-light-green flex flex-col items-center justify-center px-4 py-8">
      <div class="flex flex-col items-center justify-center w-[90dvw] md:flex-row md:w-[60dvw] gap-8">
        <form
          class="flex flex-col shrink-0 bg-red shadow-brutal rounded-xl grow min-w-[300px] py-6 px-8 gap-4"
          method="POST"
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
              class="flex-auto rounded-lg px-2 max-w-[300px]"
              type="text"
              id="first-name"
              name="firstName"
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
              class="flex-auto rounded-lg px-2 max-w-[300px]"
              type="text"
              id="last-name"
              name="lastName"
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
              class="flex-auto rounded-lg px-2 max-w-[300px]"
              type="email"
              id="email"
              name="email"
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
            <textarea class="flex-auto rounded-lg" id="message" name="message">
            </textarea>
          </div>
          <div class="flex flex-col gap-2">
            <input
              class="flex-auto rounded-xl px-2 max-w-[300px]"
              type="submit"
              id="submit-contact"
              name="submit"
              disabled={true}
            />
          </div>
        </form>
        <div class="flex flex-col justify-center px-8 py-4">
          <h2 class="font-extrabold text-2xl text-right text-black font-noto leading-[1.6rem] pb-4">
            Contact Me.
          </h2>
          <p class="text-right font-medium text-black font-noto leading-[1.35rem]">
            Feel free to reach out about anything whatsoever! Want to chat? Need
            help on a project? Have a job offer? Whatever the reason, I'm always
            happy to chat.
          </p>
        </div>
      </div>
    </div>
  );
}
