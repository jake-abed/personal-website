import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { Project } from "../components/Project.tsx";
import { Technologies } from "../islands/Technologies.tsx";
import Contact from "../islands/Contact.tsx";
import { projects } from "../static/projects.ts";
import Intro from "../components/Intro.tsx";
import { technologies } from "../static/technologies.ts";
import AboutMe from "../components/AboutMe.tsx";

export default function Home() {
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
      <body className="w-screen min-h-screen text-white gap-8 flex justify-center font-fira flex-col bg-slate-900 overflow-x-hidden">
          <h1 className="text-center">jake abed's 'old' portfolio</h1>
          <p className="text-center">new portfolio on the way shortly</p>
      </body>
    </>
  );
}
