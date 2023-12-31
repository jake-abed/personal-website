import { StateUpdater, useState } from "https://esm.sh/preact@10.19.2/hooks";

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
      <h2 className="font-noto bg-white text-center pt-8 pb-4 lg:pb-0 text-2xl leading-[1.6rem] font-extrabold">
        Tech I Use & Love:
      </h2>
      <div className="bg-white flex flex-row py-8 justify-evenly lg:justify-center">
        <div className="bg-white w-11/12 md:w-1/2 flex flex-col items-center lg:p-8 gap-4 lg:gap-8">
          {technologies.map((tech) => (
            <div
              onClick={handleTechClick(tech.name)}
              className={(activeTech === tech.name
                ? "w-full md:w-1/2 max-h-[400px]"
                : "w-[156px] max-h-[156px]") +
                " transition-all shadow-brutal duration-1000 self-center p-8 bg-light-green rounded-lg"}
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
                  <p className="animate-expand text-center font-noto text-lg">
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
