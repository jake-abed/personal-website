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
  const [activeTech, setActiveTech] = useState("");

  const techList = new Map(
    technologies.map((tech) => [tech.name, tech.description]),
  );

  const handleTechClick = (tech: string) => () => {
    if (activeTech === tech) {
      setActiveTech("");
      return;
    } else setActiveTech(tech);
    return;
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <h2 className="font-noto text-2xl leading-[1.6rem] font-extrabold">
        I Use These (And Love Them)
      </h2>
      <div className="bg-white max-w-xl flex items-center justify-center flex-wrap p-8 gap-8">
        {technologies.map((tech) => (
          <div
            className={((activeTech === tech.name)
              ? "shadow-brutal-red"
              : "shadow-brutal") +
              " flex flex-col bg-light-green rounded-lg p-4 items-center gap-4"}
            onClick={handleTechClick(tech.name)}
          >
            <img
              width="64"
              height="64"
              src={tech.logo}
              alt={tech.name + " logo."}
            />
          </div>
        ))}
        {(activeTech !== "")
          ? (
            <div className="bg-light-green p-8 rounded-lg shadow-brutal font-notom font-medium text-md leading-[1.35rem]">
              {techList.get(activeTech)}
            </div>
          )
          : <></>}
      </div>
    </div>
  );
}
