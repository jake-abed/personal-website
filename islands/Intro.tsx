import { useEffect, useState } from "https://esm.sh/preact@10.19.2/hooks";
import { chooseRandomElement } from "../utils/helpers.ts";

const webDevAdjectives = [
  "Thoughtful",
  "Creative",
  "Unique",
  "Forward-Thinking",
  "Resourceful",
  "Tenacious",
  "Conscious",
];

export default function Intro() {
  const [adjective, setAdj] = useState(chooseRandomElement(webDevAdjectives));

  useEffect(() => {
    const timer = setInterval(() => {
      setAdj(chooseRandomElement(webDevAdjectives));
    }, 5000);
    return () => clearInterval(timer);
  }, [adjective]);

  return (
    <div className="p-8 mx-auto w-full bg-white flex justify-center flex-col items-center lg:flex-row">
      <div className="max-w-3xl bg-light-green shadow-brutal rounded-lg flex flex-col items-center justify-center lg:flex-row px-12 py-16">
        <div>
          <h2
            id="intro-h2"
            className="font-extrabold text-2xl font-noto leading-[1.6rem] pb-4"
          >
            <span id="intro-adj">{adjective}</span> Web Development
          </h2>
          <p className="max-w-lg font-medium text-md leading-[1.35rem]">
            Hey, there! I'm a full stack web developer with a passion for
            learning and trying new things. Feel free to reach out via the form
            below or connect on one of the platforms below.
          </p>
          <div className="p-8 flex flex-row gap-8 justify-center items-center lg:justify-start">
            <a href="https://github.com/jake-abed">
              <img
                src="/badges/github.svg"
                width="32"
                height="32"
                alt="The Github Logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/jake-abed-550720250/">
              <img
                src="/badges/linkedin.svg"
                width="32"
                height="32"
                alt="The LinkedIn Logo"
              />
            </a>
            <a href="https://twitter.com/jakeabed">
              <img
                src="/badges/twitter.svg"
                width="32"
                height="32"
                alt="The Twitter Logo"
              />
            </a>
          </div>
        </div>
        <img
          className="rounded-full h-48 w-48 shadow-brutal-circle"
          src="/jake-pfp.webp"
          alt="A portrait of Jake Abed in a Dan Flash's inspired sweater."
        />
      </div>
    </div>
  );
}
