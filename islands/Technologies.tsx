import { useState } from "https://esm.sh/preact@10.18.1/hooks";

interface Technology {
  name: string;
  description: string;
  logo: string;
}

interface TechProps {
  technologies: Array<Technology>;
}

export function Technologies({ technologies }: TechProps) {
  const [activeTech, setActiveTech] = useState("JavaScript");

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
        <div className="bg-white max-w-xl flex justify-start flex-col lg:p-8 gap-4 lg:gap-8">
          {technologies.map((tech) => (
            <div
              className={((activeTech === tech.name)
                ? "shadow-brutal-red"
                : "shadow-brutal max-w-[96px]") +
                " flex flex-row bg-light-green rounded-lg p-4 items-center gap-4"}
              onClick={handleTechClick(tech.name)}
            >
              <img
                width="64"
                height="64"
                src={tech.logo}
                alt={tech.name + " logo."}
              />
              {(activeTech !== "" && activeTech === tech.name)
                ? (
                  <div className="bg-light-green max-w-[14rem] lg:max-w-xl p-4 font-noto font-medium text-md leading-[1.35rem]">
                    {techList.get(activeTech)}
                  </div>
                )
                : <></>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
