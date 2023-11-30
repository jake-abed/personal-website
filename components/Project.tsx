import { ProjectProps } from "../utils/interfaces.ts";

export function Project(props: ProjectProps) {
  return (
    <div
      className={"max-w-xs rounded-lg gap-2 shadow-brutal " + props.className}
      id={props.id ? props.id : ""}
    >
      <a target="_blank" href={props.url}>
        <img
          className="rounded-lg shadow-brutal-red"
          src={props.imagePath}
        >
        </img>
      </a>
      <a target="_blank" href={props.url}>
        <h3 className="font-bold font-noto">{props.name}</h3>
      </a>
      <p className="font-noto">{props.desc}</p>
      <div className="flex mt-auto flex-cols gap-4 justify-center">
        {props.icons?.map((icon) => (
          <img className="" width="32" height="32" src={icon}></img>
        ))}
      </div>
    </div>
  );
}
