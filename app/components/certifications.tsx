import { certifications } from "../constants";
import CertificationCard from "./certificationCard";

export default function Certifications() {
    return (
        <div className="mt-10 w-full" >
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center mb-10 text-white">Certifications</h2>
            <div className="flex flex-col gap-4 items-center justify-center">
                {certifications.map((certification, index) => <CertificationCard certification={certification} key={index} />)}
            </div>
        </div>
    )
}