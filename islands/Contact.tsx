import { useState } from "https://esm.sh/preact@10.18.1/hooks";

export default function Contact() {
  const [send, setSend] = useState("inactive");
  return (
    <div class="w-full bg-green">
      <form method="POST" action="/api/contact">
        <input type="text" id="first-name" name="firstName" />
        <input type="text" id="" name="firstName" />
      </form>
    </div>
  );
}
