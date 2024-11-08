import { ProjectProps } from "../utils/interfaces.ts";

const projects: Array<ProjectProps> = [
  {
    name: "Geistfeld",
    url: "https://genya-games.itch.io/geistfeld",
    imagePath: "/geistfeld.webp",
    desc:
      "A top-down survival horror game featuring asynchronous multiplayer inspired by Dark Souls. Made for Godot Wild Jam #74. The game and server were made from scratch in 9 days!",
    icons: [
      "/badges/godot.svg",
      "/badges/deno.svg",
    ],
    repoUrl: "https://github.com/jake-abed/geistfeld",
  },
  {
    name: "Koku: A Void Ant",
    url: "https://genya-games.itch.io/koku-a-void-ant",
    imagePath: "/koku.webp",
    desc:
      "A mini metroidvania game made for Godot Wild Jame #69! Aside from the font & engine, all art, music, & code were made from scratch in 9 days by yours truly.",
    icons: [
      "/badges/godot.svg",
    ],
    repoUrl: "https://github.com/jake-abed/a-void-ant",
  },
  {
    name: "WTRMLN CHAT",
    url: "https://wtrmln.chat/",
    imagePath: "/wtrmln-chat.webp",
    desc:
      "Anonymous chat rooms built with Elixir and Phoenix. The rooms persist, but any user may choose to 'spit the seed' and eject all users from the room while deleting all messages.",
    icons: [
      "/badges/elixir.svg",
      "/badges/phoenix.svg",
      "/badges/tailwind.svg",
    ],
    repoUrl: "https://github.com/jake-abed/wtrmln",
  },
  {
    name: "AOS Inventory Sync",
    url: "#",
    imagePath: "/inventory-sync.webp",
    desc:
      "A production web app to sync inventory between two disparate platforms. Features a REST API, lightweight Deno KV database, and a hand-rolled auth system.",
    icons: [
      "/badges/typescript.svg",
      "/badges/deno.svg",
      "/badges/tailwind.svg",
    ],
  },
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
];

export { projects };
