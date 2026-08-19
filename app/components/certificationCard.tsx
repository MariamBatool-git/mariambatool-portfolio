'use client'

import { Certification } from "../types"
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface CertificationCardProps {
    certification: Certification;
}
export default function CertificationCard({ certification }: CertificationCardProps) {
    return (
        <Card sx={{ minWidth: 275 }} className="w-[90%]">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {certification.provider}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                   {certification.name}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <OpenInNewIcon
                    sx={{ color: 'black', cursor: 'pointer' }}
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.open(certification.link, "_blank")
                        }
                    }}
                />
            </CardActions>
        </Card>
    )
}
