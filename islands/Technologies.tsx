import { useState } from "preact/hooks";

interface Technology {
  name: string;
  description: string;
  logo: string;
}

interface TechProps {
  technologies: Array<Technology>;
}

export function Technologies({ technologies }: TechProps) {
  const [activeTech, setActiveTech] = useState("Elixir");

  const techList = new Map(
    technologies.map((tech) => [tech.name, tech.description]),
  );

  const handleTechClick = (tech: string) => () => {
    setActiveTech(tech);
    return;
  };

  return (
    <>
      <h2 className="bg-black text-center pt-8 pb-4 lg:pt-12 lg:pb-0 text-3xl leading-[1.2rem] font-extrabold">
        Tech I Use & Love
      </h2>
      <div className="bg-black flex flex-row py-8 justify-center">
        <div className="max-w-[600px] w-11/12 md:w-5/12 flex flex-col md:justify-center md:flex-row flex-wrap items-center lg:p-8 gap-6 lg:gap-12">
          {technologies.map((tech) => (
            <div
              onClick={handleTechClick(tech.name)}
              className={(activeTech === tech.name
                ? "w-full md:w-1/2 max-h-[420px]"
                : "w-[156px] max-h-[156px]") +
                " transition-all shadow-brutal-light-green duration-1000 self-center p-8 bg-deep-black rounded-lg"}
            >
              <img
                className="mx-auto"
                width="90px"
                height="90px"
                src={tech.logo}
                alt={tech.name}
              />
              {activeTech === tech.name
                ? (
                  <p className="animate-expand pt-3 text-center text-md leading-[1.2rem]">
                    {techList.get(activeTech)}
                  </p>
                )
                : <></>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
