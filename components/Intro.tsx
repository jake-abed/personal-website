export default function Intro() {
  return (
    <div className="p-8 text-white mx-auto w-full bg-black flex justify-center flex-col items-center lg:py-12 lg:flex-row">
      <div className="max-w-4xl bg-deep-black shadow-brutal-light-green rounded-lg flex flex-col-reverse items-center justify-center gap-12 lg:flex-row-reverse px-8 py-8 lg:py-16 lg:px-24 lg:gap-16">
        <div>
          <p className="max-w-lg font-normal text-md pb-2 leading-[1.25rem]">
            Hey, there! I'm <span className="font-bold">Jake Abed</span>
            , a software developer with a passion for learning and trying new
            things. Feel free to reach out via the form below or connect on one
            of the following platforms.
          </p>
          <div className="px-8 py-4 flex flex-row gap-8 justify-center items-center lg:justify-start">
            <a target="_blank" href="https://github.com/jake-abed">
              <img
                src="/badges/github.svg"
                width="32"
                height="32"
                alt="The Github Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jake-abed-550720250/"
            >
              <img
                src="/badges/linkedin.svg"
                width="32"
                height="32"
                alt="The LinkedIn Logo"
              />
            </a>
            <a target="_blank" href="https://bsky.app/profile/jakeabed.dev">
              <img
                src="/badges/bluesky.svg"
                width="32"
                height="32"
                alt="The Bluesky Logo"
              />
            </a>
            <a target="_blank" href="https://twitter.com/jakeabed">
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
          className="rounded-full h-36 w-36 lg:h-48 lg:w-48 shadow-brutal-circle"
          src="/jake-pfp.webp"
          alt="A portrait of Jake Abed in a Dan Flash's inspired sweater."
        />
      </div>
    </div>
  );
}
