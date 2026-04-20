import ProjectCard from "./projectCard";
import { projects } from "../constants";

export default function Projects() {
    return (
        <div className="mt-10" >
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center mb-10">Projects</h2>
            <div className="flex flex-col gap-4 items-center justify-center">
                {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
            </div>
        </div>
    )
}