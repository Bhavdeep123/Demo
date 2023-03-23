import React from "react";
import Box from "@mui/material/Box";
import Avatar from "../../Images/Avatar.png";
import MenuVertical from "../../Images/MenuVertical.png";
import { Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Chatscreencenter = () => {
  return (
    <Box className="chatscreenleft">
      <Box display={"flex"}>
        <Box>
          <Button sx={{ marginLeft: "50px" }}>
            <img src={Avatar}></img>
          </Button>
        </Box>
        <Box display={"flex"}>
          <Box>
            <Typography className="ctxt1">Mishal Irfan</Typography>
            <Typography className="ctxt2">Last seen at 2:34Pm</Typography>
          </Box>
          <Box
            sx={{ alignItems: "center", display: "flex", marginLeft: "320px" }}
          >
            <Button>
              <CallIcon
                sx={{ fontSize: "35px", paddingLeft: "-10px" }}
                className="iconcall"
              />
            </Button>
            <Button>
              <img src={MenuVertical}></img>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chatscreencenter;
