import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface NavElement extends JSX.HTMLAttributes<HTMLDivElement> {
  sections: Array<string>;
}

export function Nav(props: NavElement) {
  return (
    <nav class="w-full flex flex-wrap justify-between bg-white py-2 px-4">
      <h1 class="font-monoton text-5xl">Jake Abed</h1>
      <div class="hamburger-menu flex lg:hidden">
      </div>
      <ul class="flex items-center flex-wrap gap-8">
        {props.sections.map((section) => (
          <a href={"#" + section.replace(" ", "")}>
            <li class="font-bold">{section}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
