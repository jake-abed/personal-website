import { ProjectProps } from "../utils/interfaces.ts";

const projects: Array<ProjectProps> = [
  {
    name: "AOS Inventory Sync",
    url: "#",
    imagePath: "/inventory-sync.png",
    desc:
      "A production web app to sync inventory between two disparate platforms. Features a REST API, lightweight Deno KV database, and a hyper-restrictive, hand-rolled auth system.",
    icons: [
      "/badges/typescript-logo.png",
      "/badges/deno-logo.png",
      "/badges/tailwind-logo.png",
    ],
  },
  {
    name: "Rock Paper Scissors Game",
    url: "https://jake-abed.github.io/rock-paper-scissors/",
    imagePath: "/rps-screenshot.png",
    desc:
      "A simple, quick game of RPS. You play against the computer with first-to-five rules. All art and designs are original; the rock looks a little funny, but I love it!",
    icons: [
      "/badges/html5-badge.png",
      "/badges/css-logo.png",
      "/badges/js-logo.png",
    ],
  },
  {
    name: "Book Library",
    url: "https://jake-abed.github.io/book-library/",
    imagePath: "/basilisk-library.png",
    desc:
      "A small library app to store read books and more. While simple, it demonstrates an understanding of composition through factories and separation of business logic from DOM manipulation.",
    icons: [
      "/badges/html5-badge.png",
      "/badges/css-logo.png",
      "/badges/js-logo.png",
    ],
  },
  {
    name: "To-Do List",
    url: "https://jake-abed.github.io/to-do-list",
    imagePath: "/to-do.png",
    desc:
      "An extremely simple, to-do list web app. The site is rather plain, the code demonstrates SOLID design principles and thoughtful architecture.",
    icons: [
      "/badges/html5-badge.png",
      "/badges/css-logo.png",
      "/badges/js-logo.png",
      "/badges/webpack.png",
    ],
  },
];

export { projects };
