import { experience } from "../constants";
import ExperienceCard from "./experienceCard";

export default function Experience() {
    return (
        <div className="mt-10" >
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center mb-10 text-white">Experience</h2>
            <div className="flex flex-col gap-4 items-center justify-center">
                {experience.map((exp, index) => <ExperienceCard experience={exp} key={index} />)}
            </div>
        </div>
    )
}