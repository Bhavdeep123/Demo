import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import messagelogo from "../../Images/messagelogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallIcon from "@mui/icons-material/Call";
import Contact from "./Contact";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: "white",
  height: "44px",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {},
  },
}));

function TwoButtons() {
  const [isButton1Active, setIsButton1Active] = useState(true);
  // const [isButton2Active, setisButton2Active] = useState("All");
  const handleClick = () => {
    setIsButton1Active(!isButton1Active);
  };
  // const handleClick1 = (buttonName) => {
  //   setisButton2Active(buttonName);
  // };
  const isActive = Boolean;
  return (
    <Box>
      <Box textAlign={"center"}>
        <Button
          className={isButton1Active ? "btn1" : "btnanother"}
          onClick={handleClick}
        >
          <Typography className="ltxt3"> Messages</Typography>
        </Button>
        <Button
          className={!isButton1Active ? "btn2" : "btnanother"}
          onClick={handleClick}
        >
          <Typography className="ltxt3"> Calls</Typography>
        </Button>
      </Box>
      {/* <Box sx={{ width: "85%", marginTop: "25px" }}>
        <Box sx={{ flexGrow: 1 }} textAlign={"center"}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              className="searchplaceholder"
            />
          </Search>
        </Box>
      </Box>

      <Box
        sx={{ margin: "28px", justifyContent: "space-around", display: "flex" }}
      >
        <Button
          // className="All"
          className={isButton2Active === "All" ? "All" : "Allafter1"}
          onClick={() => handleClick1("All")}
        >
          <Typography
            className={` ${isButton2Active === "All" ? "alltxt" : "alltxt1"}`}
          >
            All
          </Typography>
        </Button>
        <Button
          className={isButton2Active === "Missed" ? "All1" : "Allafter2"}
          onClick={() => handleClick1("Missed")}
        >
          <Typography
            className={` ${
              isButton2Active === "Missed" ? "alltxt" : "alltxt1"
            }`}
          >
            Missed
          </Typography>
        </Button>
        <Button
          className={isButton2Active === "Incoming" ? "All2" : "Allafter3"}
          onClick={() => handleClick1("Incoming")}
        >
          <Typography
            className={` ${
              isButton2Active === "Incoming" ? "alltxt" : "alltxt1"
            }`}
          >
            Incoming
          </Typography>
        </Button>
      </Box> */}

      <Contact isActive={isButton1Active} />
    </Box>
  );
}

export const Chatscreenleft = () => {
  return (
    <Box>
      <Box className="chatscreenleft" display={"flex"}>
        <Box>
          <Typography level="h1" className="ltxt1">
            Select your number
          </Typography>
          <Button variant="contained" className="lbut">
            <Typography className="ltxt2" level="h2">
              All Numbers &nbsp;
            </Typography>
            <ExpandMoreIcon />
          </Button>
        </Box>
        <Box sx={{ margin: "18px" }}>
          <Button style={{ Padding: "0" }}>
            <img
              src={messagelogo}
              alt={"messagelogo"}
              className="mt-2"
              style={{ marginTop: "10px" }}
            />
          </Button>
          <IconButton>
            <CallIcon
              sx={{ fontSize: "35px", paddingLeft: "-10px" }}
              className="iconcall"
            />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginTop: "35px" }}>
        <TwoButtons />
      </Box>
    </Box>
  );
};
