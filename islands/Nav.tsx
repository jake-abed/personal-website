import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface NavElement extends JSX.HTMLAttributes<HTMLDivElement> {
  sections: Array<string>;
}

function toggleNavOptions() {
  const navOptions = document.querySelector(".nav-options");
  if (!navOptions) return;
  navOptions.classList.toggle("hidden");
}

export function Nav(props: NavElement) {
  return (
    <nav class="w-full flex flex-wrap items-center justify-start lg:justify-between bg-red py-2 px-4">
      <div
        class="hamburger-menu space-y-2 mr-auto lg:hidden"
        onClick={toggleNavOptions}
      >
        <span
          class="block h-0.5 w-8 bg-white"
          style="filter: drop-shadow(0px 0px 2px black);"
        >
        </span>
        <span
          class="block h-0.5 w-8 bg-white"
          style="filter: drop-shadow(0px 0px 2px black);"
        >
        </span>
        <span
          class="block h-0.5 w-8 bg-white"
          style="filter: drop-shadow(0px 0px 2px black);"
        >
        </span>
      </div>
      <h1
        style="filter: drop-shadow(0px 0px 2px black);"
        class="font-monoton text-white drop-shadow-text text-5xl text-center item-center"
      >
        JAKE ABED
      </h1>
      <ul class="nav-options flex flex-col flex-wrap lg:gap-8 hidden lg:flex lg:flex-row lg:items-center">
        {props.sections.map((section) => (
          <a href={"#" + section.replace(" ", "")}>
            <li
              style="filter: drop-shadow(0px 0px 2px black);"
              class="font-bold text-white font-noto"
            >
              {section}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
