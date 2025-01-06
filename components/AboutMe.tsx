export default function AboutMe() {
  const IMAGES = [
    {
      path: "cycling.webp",
      text: "A super backlit photo of me and my bike during a century!",
    },
    {
      path: "trinity.webp",
      text: "Deer Lake on a recent backpacking trip to the Trinity Alps.",
    },
    {
      path: "tacoma.webp",
      text: "My partner and I visited Frank Herbert Park in Tacoma recently.",
    },
    {
      path: "boiz.webp",
      text: "A picture of my cats, Alucard & Loki, snuggling in their bed.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 p-12 pt-8">
      <div className="max-w-[800px] rounded-xl shadow-brutal-light-green bg-deep-black p-4">
        <h2 className="font-extrabold pb-8 text-center text-2xl">
          About Me
        </h2>
        <p className="font-medium leading-[1.35rem]">
          Aside from coding, I keep myself busy with making video games,
          cycling, listening to music, playing music, making gelato, playing
          video games, backpacking, and hanging out with my lovely cats.
        </p>
      </div>
      <div className="max-w-[900px] flex flex-row justify-center flex-wrap gap-8">
        {IMAGES.map((img) => (
          <div className="relative gap-4 z-10 flex flex-col min-w-[300px]">
            <img
              className="relative z-30 hover:z-10 rounded-lg shadow-brutal-light-green transition-all duration-150 hover:scale-110"
              width={400}
              height={300}
              src={img.path}
              alt={img.text}
            />
            <div class="relative z-0 max-w-[400px] shadow-brutal-light-green bg-deep-black p-4 rounded-lg">
              <p className="font-semibold">{img.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
