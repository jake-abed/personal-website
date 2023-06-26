import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ProjectProps } from "../utils/interfaces.ts";

export function Project(props: ProjectProps) {
    return (
        <div
            class={props.class}
            id={props.id ? props.id : ''}
            disabled={!IS_BROWSER || props.disabled}
        >
            <div>
                <img src={props.imagePath}></img>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}