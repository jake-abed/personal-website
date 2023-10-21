import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getCount } from "../utils/db.ts";
import { Nav } from "../components/Nav.tsx";
import { Project } from "../components/Project.tsx";
import Contact from "../islands/Contact.tsx";
import { ProjectProps } from "../utils/interfaces.ts";
import { projects } from "../static/projects.ts";
import Intro from "../islands/Intro.tsx";

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
      <body class="w-screen min-h-screen flex flex-col bg-slate-900 overflow-x-hidden">
        <Nav sections={navSections} />
        <Intro></Intro>
        <div
          id="Projects"
          class="flex justify-center mx-auto py-8 w-11/12 gap-6 flex-wrap"
        >
          {projects.map((project) => {
            return (
              <Project
                class="p-4 flex flex-col items-center bg-light-green flex-wrap"
                {...project}
              >
              </Project>
            );
          })}
        </div>
        <Contact></Contact>
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
