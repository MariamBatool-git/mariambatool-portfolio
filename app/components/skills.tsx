"use client";

import { Chip, Stack, Card, CardContent } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { skillCategories } from "../constants";

export default function Projects() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="mt-10 w-full">
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center mb-10 text-white">Skills</h2>

            {/* Tabs layout - sm and up */}
            <Box sx={{ width: '100%', typography: 'body1' }} className="hidden sm:block">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            className="text-base"
                            onChange={handleChange}
                            sx={{
                                '& .MuiTab-root': {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                },
                                '& .MuiTab-root.Mui-selected': {
                                    color: '#ffffff',
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            {skillCategories.map((category, index) => (
                                <Tab key={index} label={category.label} value={(index + 1).toString()} />
                            ))}
                        </TabList>
                    </Box>
                    {skillCategories.map((category, index) => (
                        <TabPanel key={index} value={(index + 1).toString()}>
                            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 1, marginTop: 2 }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip label={skill} key={skillIndex} sx={{ borderRadius: 3, backgroundColor: 'white', minWidth: 90 }} />
                                ))}
                            </Stack>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>

            {/* Stacked list layout - below sm */}
            <div className="sm:hidden flex flex-col gap-4 items-center">
                {skillCategories.map((category, index) => (
                    <Card sx={{ minWidth: 275 }} className="w-[90%]" key={index}>
                        <CardContent>
                            <div key={index} className="mb-6">
                                <h3 className="text-base font-semibold text-black/90 mb-2 pb-1 border-b border-black/20">
                                    {category.label}
                                </h3>
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, marginBottom: 1, marginTop: 1 }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <Chip label={skill} key={skillIndex} sx={{ borderRadius: 3, backgroundColor: 'black', opacity: 0.5, minWidth: 80, color: 'white' }} />
                                    ))}
                                </Stack>
                            </div>
                        </CardContent>
                    </Card>


                ))}
            </div>
        </div>
    );
}