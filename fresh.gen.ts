// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $api_contact from "./routes/api/contact.ts";
import * as $index from "./routes/index.tsx";
import * as $Contact from "./islands/Contact.tsx";
import * as $Intro from "./islands/Intro.tsx";
import * as $Technologies from "./islands/Technologies.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/api/contact.ts": $api_contact,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Contact.tsx": $Contact,
    "./islands/Intro.tsx": $Intro,
    "./islands/Technologies.tsx": $Technologies,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
