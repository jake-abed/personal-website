import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getCount } from "../utils/db.ts";
import { Nav } from "../components/Nav.tsx";
import { Project } from "../components/Project.tsx";
import { ProjectProps } from "../utils/interfaces.ts";

interface HomeProps {
  start: number;
}

export const handler: Handlers<HomeProps> = {
  async GET(_req, ctx) {
    let start = await getCount();
    if (start === null) start = 3;
    return ctx.render({ start });
  },
};

const project1: ProjectProps = {
  name: "Rock Paper Scissors Game",
  url: "https://jake-abed.github.io/rock-paper-scissors/",
  imagePath: "/rps-screenshot.png",
  desc:
    "A simple, quick game of RPS. First to five wins. All art and designs are original.",
  icons: [
    "/badges/html5-badge.png",
    "/badges/css-logo.png",
    "/badges/js-logo.png",
  ],
};

const project2: ProjectProps = {
  name: "Book Library",
  url: "https://jake-abed.github.io/book-library/",
  imagePath: "/basilisk-library.png",
  desc:
    "A small library app to store read books and more. It's a simple project, but demonstrates",
  icons: [
    "/badges/html5-badge.png",
    "/badges/css-logo.png",
    "/badges/js-logo.png",
  ],
};

const project3: ProjectProps = {
  name: "AOS Inventory Sync",
  url: "#",
  imagePath: "/aos-inventory-sync.png",
  desc:
    "A production web app to sync inventory between two disparate platforms. Features a REST API, lightweight Deno KV database, and a hyper-restrictive, hand-rolled auth system.",
  icons: [
    "/badges/typescript-logo.png",
    "/badges/deno-logo.png",
    "/badges/tailwind-logo.png",
  ],
};

const navSections = [
  "Home",
  "Projects",
  "Contact Me",
];

export default function Home(props: PageProps<HomeProps>) {
  return (
    <>
      <Head>
        <title>Jake Abed's Portfolio</title>
      </Head>
      <body class="w-screen min-h-screen flex flex-col bg-slate-900">
        <Nav sections={navSections} />
        <div class="px-12 py-16 mx-auto w-full bg-light-green">
          <h2 class="font-extrabold text-2xl font-noto leading-[1.6rem] pb-4">
            Thoughtful, Different, Web Development
          </h2>
          <p class="max-w-lg font-medium text-md leading-[1.35rem]">
            Thank you for stopping by. While I consider this site very much
            'Under Construction', I firmly believe that it successfully
            demonstrates my abilities and can show you a little about me as
            well. Don't be afraid to get in touch!
          </p>
        </div>
        <div
          id="Projects"
          class="flex justify-center mx-auto py-8 w-11/12 gap-6 flex-wrap"
        >
          <Project
            class="p-4 flex flex-col items-center bg-light-green flex-wrap"
            {...project1}
          >
          </Project>
          <Project
            class="p-4 flex flex-col items-center bg-light-green flex-wrap"
            {...project2}
          >
          </Project>
          <Project
            class="p-4 flex flex-col items-center bg-light-green flex-wrap"
            {...project3}
          >
          </Project>
        </div>
        <div class="static bottom-0 w-full p-4 mt-auto bg-red flex justify-center">
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </body>
    </>
  );
}
