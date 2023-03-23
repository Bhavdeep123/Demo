import React from "react";
// import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import { Chatscreenleft } from "./Chatscreenleft";
import Chatscreencenter from "./Chatscreencenter";
import { Chatscreenright } from "./Chatscreenright";
import { Divider } from "@mui/material";

export const Chatscreen = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Box display="flex">
        <Box className="chatbackleft">
          <Chatscreenleft />
        </Box>
        <Box className="chatbackcent">
          <Chatscreencenter />
        </Box>
        <Divider orientation="vertical" flexItem />

        <Box className="chatbackright">
          <Chatscreenright />
        </Box>
      </Box>
    </Box>
  );
};
