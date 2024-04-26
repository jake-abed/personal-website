import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function LinkInBio() {
  return (
    <>
      <Head>
        <title>Jake Abed's Link-In-Bio</title>
        <meta
          name="description"
          content="Jake Abed's personal link-in-bio page for use on Instagram and other social media platforms."
        >
        </meta>
      </Head>
      <Header />
    </>
  )
}
