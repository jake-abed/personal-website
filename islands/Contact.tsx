import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [send, setSend] = useState("inactive");

  return (
    <div class="w-screen bg-light-green flex flex-col">
      <h2 class="font-extrabold text-2xl text-center font-noto leading-[1.6rem] pb-4">
        Contact Me!
      </h2>
      <form
        class="flex flex-col w-full p-12"
        method="POST"
        action="/api/contact"
      >
        <div class="">
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" />
        </div>
        <div class="flex gap-2">
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" />
        </div>
        <div class="flex gap-2">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <textarea id="message" name="message"></textarea>
      </form>
    </div>
  );
}
