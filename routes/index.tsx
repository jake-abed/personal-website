import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getCount } from "../utils/db.ts";
import Header from "../components/Header.tsx";
import { Project } from "../components/Project.tsx";
import { Technologies } from "../islands/Technologies.tsx";
import Contact from "../islands/Contact.tsx";
import { projects } from "../static/projects.ts";
import Intro from "../islands/Intro.tsx";
import { technologies } from "../static/technologies.js";

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

export default function Home(props: PageProps<HomeProps>) {
  return (
    <>
      <Head>
        <title>Jake Abed's Portfolio</title>
        <meta
          name="description"
          content="Jake Abed's personal portfolio with his projects, information, and a quick way to contact him."
        >
        </meta>
      </Head>
      <body className="w-screen min-h-screen flex flex-col bg-slate-900 overflow-x-hidden">
        <Header />
        <Intro></Intro>
        <Technologies technologies={technologies} />
        <div
          id="projects"
          className="bg-white flex justify-center py-16 gap-6 flex-wrap"
        >
          {projects.map((project) => {
            return (
              <Project
                className="p-4 flex flex-col items-center bg-light-green flex-wrap"
                {...project}
              >
              </Project>
            );
          })}
        </div>
        <Contact></Contact>
        <div className="static bottom-0 w-full p-4 mt-auto bg-red flex justify-center">
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
