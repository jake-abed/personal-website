import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ProjectProps } from "../utils/interfaces.ts";

export function Project(props: ProjectProps) {
    return (
        <div class={props.class}
            id={props.id ? props.id : ''}>
            <a target="_blank" href={props.url} >
                <img src={props.imagePath}></img>
            </a>
            <a target="_blank" href={props.url}>
                <h3 class="font-bold">{props.name}</h3>
            </a>
            <p>{props.desc}</p>
            <div class="flex flex-cols gap-4 justify-center">
                {props.icons?.map(icon => <img width="32" height="32" src={icon}></img>)}
            </div>
        </div>
    )
}