export default function Header() {
  return (
    <div className="sticky top-0 z-10 left-0 w-full flex flex-wrap items-center justify-center bg-red py-2 px-4 lg:py-8 lg:px-6">
      <a href="/">
        <h1
          style="filter: drop-shadow(0px 0px 2px black);"
          className="font-monoton tracking-wider text-white drop-shadow-text text-5xl text-center item-center"
        >
          JAKE ABED
        </h1>
      </a>
    </div>
  );
}
