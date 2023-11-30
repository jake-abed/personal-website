import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface NavElement extends JSX.HTMLAttributes<HTMLDivElement> {
  sections: Array<string>;
}

export function Nav(props: NavElement) {
  return (
    <nav className="sticky top-0 left-0 w-full flex flex-wrap items-center justify-center lg:justify-between bg-red py-2 px-4">
      <a href="/">
        <h1
          style="filter: drop-shadow(0px 0px 2px black);"
          className="font-monoton text-white drop-shadow-text text-5xl text-center item-center"
        >
          JAKE ABED
        </h1>
      </a>
      <ul className="nav-options transition-height duration-300 flex  flex-wrap gap-8 lg:flex flex-row lg:items-center">
        {props.sections.map((section) => (
<<<<<<< HEAD
          <a href={"#" + section.replace(" ", "").toLowerCase()}>
            <li
              style="filter: drop-shadow(0px 0px 2px black);"
              className="font-bold text-white font-noto"
            >
=======
          <li
            style="filter: drop-shadow(0px 0px 2px black);"
            class="font-bold text-white font-noto"
          >
            <a href={"#" + section.replace(" ", "").toLowerCase()}>
>>>>>>> b9a492220c88ab2d3564e85fba0eea79c04d57f8
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
