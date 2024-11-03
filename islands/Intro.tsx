import { useEffect, useState } from "preact/hooks";
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
    <div className="p-8 text-white mx-auto w-full bg-black flex justify-center flex-col items-center lg:py-24 lg:flex-row">
      <div className="max-w-4xl bg-deep-black shadow-brutal-light-green rounded-lg flex flex-col-reverse items-center justify-center gap-16 lg:flex-row-reverse px-12 py-16 lg:py-28 lg:px-24 lg:gap-24">
        <div>
          <h2
            id="intro-h2"
            className="font-extrabold text-2xl font-noto leading-[1.6rem] pb-4 md:text-4xl lg:pt-12"
          >
            <span id="intro-adj">{adjective}</span> Development
          </h2>
          <p className="max-w-lg font-medium text-md leading-[1.35rem]">
            Hey, there! I'm a software developer with a passion for learning and
            trying new things. Feel free to reach out via the form below or
            connect on one of the platforms below.
          </p>
          <div className="px-8 py-4 flex flex-row gap-8 justify-center items-center lg:justify-start">
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
          className="rounded-full h-48 w-48 lg:h-64 lg:w-64 shadow-brutal-circle"
          src="/jake-pfp.webp"
          alt="A portrait of Jake Abed in a Dan Flash's inspired sweater."
        />
      </div>
    </div>
  );
}
