import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface NavElement extends JSX.HTMLAttributes<HTMLDivElement> {
  sections: Array<string>;
}

export function Nav(props: NavElement) {
  return (
    <nav class="sticky top-0 left-0 w-full flex flex-wrap items-center justify-center lg:justify-between bg-red py-4 px-6">
      <h1
        style="filter: drop-shadow(0px 0px 2px black);"
        class="font-monoton text-white drop-shadow-text text-5xl text-center item-center"
      >
        JAKE ABED
      </h1>
      <ul class="nav-options transition-height duration-300 flex flex-wrap gap-8 flex-row md:items-center">
        {props.sections.map((section) => (
          <a href={"#" + section.replace(" ", "")}>
            <li
              style="filter: drop-shadow(0px 0px 2px black);"
              class="font-bold text-white font-noto text-xl"
            >
              {section}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}