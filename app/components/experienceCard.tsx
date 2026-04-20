'use client'

import { Experience } from "../types"
import { Card, CardContent, Typography, Stack } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

interface ExperienceCardProps {
    experience: Experience;
}
export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <Card sx={{ minWidth: 275 }} className="w-[90%]">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {experience.company}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {experience.role}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {experience.duration}
                </Typography>
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 1, marginTop: 2 }}>
                    {experience.description.map((desc, index) =>
                        <Typography variant="body2" gutterBottom key={index}>
                           <CircleIcon sx={{fontSize : 5}}/> {desc}
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}
