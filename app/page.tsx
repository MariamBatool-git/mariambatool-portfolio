import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer";
import { designation, name, skillsSummary } from "./constants";

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
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-base">{designation}</h2>
          <h3 className="text-center text-sm font-thin">{skillsSummary}</h3>
        </div>
      </div>
      <div id="content-section" className="w-full bg-stone-800 px-2 flex flex-col items-center justify-center">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Box component="footer" className="mt-2 w-[100%] flex flex-col sm:flex-row items-center justify-center gap-4 py-4 rounded-t-lg bg-stone-200">
          <div className="w-full flex flex-col items-start justify-center px-5">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                color: 'black'
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, mb: 3, color: 'black'/*maxWidth: 220 //for large screens */ }}
            >
              {skillsSummary}
            </Typography>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <h2 className="text-lg font-bold border-b-4 border-red-800 w-[30%] text-center text-black">Contact ME</h2>
            <Contact />
          </div>
          <div id="important-links">
            <h4 className="text-center text-sm font-thin text-white">© 2026 Mariam Batool. All rights reserved.</h4>
          </div>
        </Box>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
