import { Box, Typography } from "@mui/material";
import { name, skillsSummary } from "../constants";
import Contact from "./contact";


export default function Footer() {
    return(
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
    )
}