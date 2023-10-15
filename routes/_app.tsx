import { AppProps } from "$fresh/server.ts";
import { Nav } from "../components/Nav.tsx";

const navSections = [
  "Home",
  "About Me",
  "Projects",
  "Skills",
  "Contact Me",
];

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        >
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        >
        </link>
        <title>Jake Abed's Portfolio</title>
      </head>
      <body>
        <Nav sections={navSections} />
        <Component />
      </body>
    </html>
  );
}
