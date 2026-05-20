import { skills } from "../constants";
import { Chip, Stack } from "@mui/material";
export default function Projects() {
    return (
        <div className="mt-10" >
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center mb-10 text-white">Skills</h2>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 1, marginTop: 2 }}>
                {skills.map((skill, index) =>
                    <Chip label={skill} key={index} sx={{ borderRadius: 3, backgroundColor : 'white' }} />
                )}
            </Stack>
        </div>
    )
}