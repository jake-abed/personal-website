import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ProjectProps } from "../utils/interfaces.ts";

export function Project(props: ProjectProps) {
    return (
        <div
            class={props.class + "mx-auto p-4 flex flex-wrap bg-pink-50"}
            id={props.id ? props.id : ''}
        >
            <div class="p-4 br-2 mx-auto rounded-md border-black border-2 w11/12">
                <a target="_blank" href={props.url} >
                    <img src={props.imagePath}></img>
                </a>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                
            </div>
        </div>
    )
}