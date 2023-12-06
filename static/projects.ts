import { ProjectProps } from "../utils/interfaces.ts";

const projects: Array<ProjectProps> = [
  {
    name: "Memories of Music",
    url: "https://memory-game-blush-eta.vercel.app/",
    imagePath: "/memories-of-music.webp",
    desc:
      "A fun React app that grabs album art from lastFM's API to play a memory card game. Custom React hooks abound in this project! All of the albums are personal favorites too.",
    icons: [
      "/badges/react.svg",
      "/badges/javascript.svg",
      "/badges/vite.svg",
    ],
    repoUrl: "https://github.com/jake-abed/memory-game",
  },
  {
    name: "AOS Inventory Sync",
    url: "#",
    imagePath: "/inventory-sync.webp",
    desc:
      "A production web app to sync inventory between two disparate platforms. Features a REST API, lightweight Deno KV database, and a hyper-restrictive, hand-rolled auth system.",
    icons: [
      "/badges/typescript.svg",
      "/badges/deno.svg",
      "/badges/tailwind.svg",
    ],
  },
  {
    name: "Rock Paper Scissors Game",
    url: "https://jake-abed.github.io/rock-paper-scissors/",
    imagePath: "/rps-screenshot.webp",
    desc:
      "A simple, quick game of RPS. You play against the computer with first-to-five rules. All art and designs are original; the rock looks a little funny, but I love it!",
    icons: [
      "/badges/html5.svg",
      "/badges/css.svg",
      "/badges/javascript.svg",
    ],
    repoUrl: "https://github.com/jake-abed/rock-paper-scissors",
  },
  {
    name: "Book Library",
    url: "https://jake-abed.github.io/book-library/",
    imagePath: "/basilisk-library.webp",
    desc:
      "A small library app to store read books and more. While simple, it demonstrates an understanding of composition through factories and separation of business logic from DOM manipulation.",
    icons: [
      "/badges/html5.svg",
      "/badges/css.svg",
      "/badges/javascript.svg",
    ],
    repoUrl: "https://github.com/jake-abed/book-library",
  },
];

export { projects };
