import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <div id="hero-section" className="w-full flex flex-col items-center justify-center p-2 gap-2 border-b-1 dark:border-white border-black">
        <div id="profile-image" className="w-30 h-30 rounded-full overflow-hidden">
          <Image
            src="/profile_pic.jpg"
            alt="Mariam Batool"
            width={200} //won't be used but required by next/image
            height={200} //won't be used but required by next/image
            className="w-full h-full object-cover"
          />
        </div>
        <div id="profile-metadata" className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-2xl font-bold">Mariam Batool</h1>
          <h2 className="text-base">Software Engineer</h2>
          <h3 className="text-center text-sm font-thin">React | React Native | Next JS | Python | Flask | Typescript | Cloud Services</h3>
        </div>
      </div>
      <div id="content-section" className="w-full bg-stone-800 px-2">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Box component="footer">
          hello world
        </Box>
      </div>
    </div>
  );
}
