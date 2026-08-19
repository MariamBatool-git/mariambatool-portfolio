'use client'

import { Project } from "../types"
import { Card, CardContent, Typography, CardActions, Chip, Stack } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
interface ProjectCardProps {
    project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card sx={{ minWidth: 275 }} className="w-[90%]">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {project.appType}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {project.description}
                </Typography>
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 1, marginTop: 2 }}>
                    {project.technologies.map((tech, index) =>
                        <Chip label={tech} key={index} sx={{ borderRadius: 1 }} />
                    )}
                </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <OpenInNewIcon
                    sx={{ color: 'black', cursor: 'pointer'  }}
                    onClick={() => {
                        if (project.link == ""){
                            return;
                        }
                        if (typeof window !== 'undefined') {
                            window.open(project.link, "_blank")
                        }
                    }}
                />
            </CardActions>
        </Card>
    )
}
