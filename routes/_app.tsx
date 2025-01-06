import { AppProps } from "$fresh/server.ts";
import { asset } from "https://deno.land/x/fresh@1.5.2/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en" className="bg-black">
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
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700"
          rel="stylesheet"
        >
        </link>
        <link rel="stylesheet" href={asset("global.css")} />
        <title>Jake Abed's Portfolio</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
