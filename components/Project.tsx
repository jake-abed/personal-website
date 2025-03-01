import { ProjectProps } from "../utils/interfaces.ts";

export function Project(props: ProjectProps) {
  return (
    <div
      className={"max-w-xs rounded-lg gap-2 shadow-brutal-light-green relative " +
        props.className}
      id={props.id ? props.id : ""}
    >
      <a target="_blank" href={props.url}>
        <img
          className="rounded-lg"
          src={props.imagePath}
          alt={`A screenshot of ${props.name} in action.`}
        >
        </img>
      </a>
      <a target="_blank" href={props.url}>
        <h3 className="font-bold">{props.name}</h3>
      </a>
      <p>{props.desc}</p>
      <div className="flex mt-auto flex-cols gap-4 pt-2 justify-center">
        {props.icons?.map((icon) => (
          <img
            className="flex-none"
            style="height: 32px; width: 32px;"
            width="32"
            height="32"
            src={icon}
            alt="An icon of a technology used to make this project."
          >
          </img>
        ))}
        {props.repoUrl
          ? (
            <>
              <a
                className="bg-deep-black px-[7px] pt-[8px] pb-[6px] rounded-full absolute bottom-4 right-4"
                href={props.repoUrl}
              >
                <img
                  src="/badges/github-green.svg"
                  width="28"
                  height="28"
                  alt="The GitHub logo!"
                />
              </a>
            </>
          )
          : null}
      </div>
      <div className="flex justify-between">
      </div>
    </div>
  );
}
