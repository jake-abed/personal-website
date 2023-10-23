import { useEffect, useState } from "https://esm.sh/preact@10.18.1/hooks";
import { chooseRandomElement } from "../utils/helpers.ts";

const webDevAdjectives = [
  "Thoughtful",
  "Creative",
  "Unique",
  "Forward Thinking",
  "Resourceful",
  "Different",
  "Conscious",
];

export default function Intro() {
  const [adjective, setAdj] = useState("Thoughtful");

  useEffect(() => {
    const timer = setInterval(() => {
      setAdj(chooseRandomElement(webDevAdjectives));
    }, 5000);
    return () => clearInterval(timer);
  }, [adjective]);

  return (
    <div class="px-12 py-16 mx-auto w-full bg-light-green">
      <h2
        id="intro-h2"
        class="font-extrabold text-2xl font-noto leading-[1.6rem] pb-4"
      >
        <span id="intro-adj">{adjective}</span> Web Development
      </h2>
      <p class="max-w-lg font-medium text-md leading-[1.35rem]">
        Thank you for stopping by. While I consider this site very much 'Under
        Construction', I firmly believe that it successfully demonstrates my
        abilities and can show you a little about me as well. Don't be afraid to
        get in touch!
      </p>
    </div>
  );
}
