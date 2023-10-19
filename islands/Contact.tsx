import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [send, setSend] = useState("inactive");

  return (
    <div class="w-screen bg-light-green flex flex-col p-8">
      <h2 class="font-extrabold text-2xl text-center font-noto leading-[1.6rem] pb-4">
        Contact Me!
      </h2>
      <form
        class="flex mx-auto flex-col shrink-0 grow min-w-[300px] max-w-2xl gap-4"
        method="POST"
        action="/api/contact"
      >
        <div class="flex gap-2 flex-auto">
          <label for="first-name">First Name:</label>
          <input
            class="flex-auto"
            type="text"
            id="first-name"
            name="firstName"
          />
        </div>
        <div class="flex gap-2">
          <label for="last-name">Last Name:</label>
          <input class="flex-auto" type="text" id="last-name" name="lastName" />
        </div>
        <div class="flex gap-2">
          <label for="email">Email:</label>
          <input class="flex-auto" type="email" id="email" name="email" />
        </div>
        <textarea class="flex-auto" id="message" name="message"></textarea>
      </form>
    </div>
  );
}
