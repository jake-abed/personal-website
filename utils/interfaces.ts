import { JSX } from "preact";

interface ProjectProps extends JSX.HTMLAttributes<HTMLDivElement> {
  name: string;
  url?: string;
  desc: string;
  imagePath?: string;
  icons?: Array<string>;
  repoUrl?: string;
}

export type { ProjectProps };
