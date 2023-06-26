import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { getCount } from "../utils/db.ts";
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

const testProject: ProjectProps = {
  name: 'Cheap Dog',
  url: 'https://jakeabed.dev',
  imagePath: './static/favicon.ico',
  desc: 'A cheap dog made of fresh meat and bones.'
}

export default function Home(props: PageProps<HomeProps>) {
  return (
    <>
      <Head>
        <title>Jake Abed's Portfolio</title>
      </Head>
      <body class="w-screen bg-green-100">
        <div class="p-4 mx-auto my-4 w-9/12 bg-red-100">
          <p class="my-6">
            Welcome to Jake Abed's in progress portfolio.
          </p>
        </div>
        <div class="bg-pink-200 p-4 mx-auto my-4 w-9/12">
          <Counter start={props.data.start} />
        </div>
        <Project class="mx-auto w-9/12 bg-pink-400" url = {testProject.url}
        name = {testProject.name}
        desc = {testProject.desc}
        ></Project>
      </body>
      
    </>
  );
}
