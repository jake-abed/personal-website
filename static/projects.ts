import { ProjectProps } from "../utils/interfaces.ts";

const projects: Array<ProjectProps> = [
  {
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
  },
  {
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
  },
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
    name: "To-Do List",
    url: "",
    imagePath: "/to-do.png",
    desc:
      "An extremely simple, to-do list web app. While not flashy, the code demonstrates SOLID design principles and thoughtful architecture.",
    icons: [
      "/badges/html5-badge.png",
      "/badges/css-logo.png",
      "/badges/js-logo.png",
      "/badges/webpack.png",
    ],
  },
];

export { projects };
