import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import { Data } from "./DummyData";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Data1 } from "./DummyData";

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

export default function Contact({ isActive }) {
  // console.log("data", Data1);

  const DummyData = Data;
  // console.log(DummyData);alltxt
  const DummyData1 = Data1;

  const [isButton2Active, setisButton2Active] = useState(2);
  const [isButton3Active, setisButton3Active] = useState(2);
  const handleClick1 = (buttonName) => {
    setisButton2Active(buttonName);
  };

  const handleClick2 = (buttonName) => {
    setisButton3Active(buttonName);
  };

  // scheduled=0,broadcast=1,all=2

  return (
    <>
      {isActive && (
        <>
          <Box sx={{ width: "85%", marginTop: "25px" }}>
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
            sx={{
              margin: "28px",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            <Button
              // className="All"
              className={isButton2Active === 2 ? "All" : "Allafter1"}
              onClick={() => handleClick1(2)}
            >
              <Typography
                className={` ${isButton2Active === 2 ? "alltxt" : "alltxt1"}`}
              >
                All
              </Typography>
            </Button>
            <Button
              className={isButton2Active === 0 ? "All1" : "Allafter2"}
              onClick={() => handleClick1(0)}
            >
              <Typography
                className={` ${isButton2Active === 0 ? "alltxt" : "alltxt1"}`}
              >
                Sceduled
              </Typography>
            </Button>
            <Button
              className={isButton2Active === 1 ? "All2" : "Allafter3"}
              onClick={() => handleClick1(1)}
            >
              <Typography
                className={` ${isButton2Active === 1 ? "alltxt" : "alltxt1"}`}
              >
                Broadcast
              </Typography>
            </Button>
          </Box>
          <Box sx={{ height: "333px", overflowX: "hidden" }}>
            {DummyData.map((user) => {
              if (isButton2Active == 2) {
                return (
                  <Box className="backbox" display={"flex"}>
                    <Box>
                      {/* <Avatar {...stringAvatar("bhavdeep parmar ")} /> */}
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%), #4d72f8 !important",
                        }}
                      >
                        {user.name.split(" ")[0][0]}
                        {user.name.split(" ")[1][0]}
                        {/* {name.split(" ")[0][0]}${name.split(" ")[1][0]} */}
                      </Avatar>
                    </Box>
                    <Box width={"215px"}>
                      <Typography className="avtarname">
                        {" "}
                        {user.name}{" "}
                      </Typography>
                      <span className="callsdetails">{user.calls}</span>
                    </Box>
                    <Box>
                      <Typography className="timeofcalls">
                        {user.time}
                      </Typography>
                      {/* <Box className={"infoicon"}></Box> */}
                      <InfoOutlinedIcon
                        sx={{
                          color: "#e72fe7",
                        }}
                        className={"infoicon"}
                      ></InfoOutlinedIcon>
                    </Box>
                  </Box>
                );
              } else if (user.status == isButton2Active) {
                return (
                  <Box className="backbox" display={"flex"}>
                    <Box>
                      {/* <Avatar {...stringAvatar("bhavdeep parmar ")} /> */}
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%), #4d72f8 !important",
                        }}
                      >
                        {user.name.split(" ")[0][0]}
                        {user.name.split(" ")[1][0]}
                        {/* {name.split(" ")[0][0]}${name.split(" ")[1][0]} */}
                      </Avatar>
                    </Box>
                    <Box width={"215px"}>
                      <Typography className="avtarname">
                        {" "}
                        {user.name}{" "}
                      </Typography>
                      <span className="callsdetails">{user.calls}</span>
                    </Box>
                    <Box>
                      <Typography className="timeofcalls">
                        {user.time}
                      </Typography>
                      {/* <Box className={"infoicon"}></Box> */}
                      <InfoOutlinedIcon
                        sx={{
                          color: "#e72fe7",
                        }}
                        className={"infoicon"}
                      ></InfoOutlinedIcon>
                    </Box>
                  </Box>
                );
              }
            }).filter((item) => item)}
          </Box>
        </>
      )}
      {!isActive && (
        <>
          <Box sx={{ width: "85%", marginTop: "25px" }}>
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
            sx={{
              margin: "28px",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            <Button
              className={isButton3Active === 2 ? "All" : "Allafter1"}
              onClick={() => handleClick2(2)}
              // 2
            >
              <Typography
                className={` ${isButton3Active === 2 ? "alltxt" : "alltxt1"}`}
              >
                All
              </Typography>
            </Button>

            <Button
              className={isButton3Active === 1 ? "All1" : "Allafter2"}
              onClick={() => handleClick2(1)}
              // 1
            >
              <Typography
                className={` ${isButton3Active === 1 ? "alltxt" : "alltxt1"}`}
              >
                Missed
              </Typography>
            </Button>
            <Button
              className={isButton3Active === 0 ? "All2" : "Allafter3"}
              onClick={() => handleClick2(0)}
              // "0"
            >
              <Typography
                className={` ${isButton3Active === 0 ? "alltxt" : "alltxt1"}`}
              >
                Incoming
              </Typography>
            </Button>
          </Box>
          <Box sx={{ height: "333px", overflowX: "hidden" }}>
            {DummyData1.map((user) => {
              if (isButton3Active == 2) {
                return (
                  <Box className="backbox" display={"flex"}>
                    <Box>
                      {/* <Avatar {...stringAvatar("bhavdeep parmar ")} /> */}
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%), #4d72f8 !important",
                        }}
                      >
                        {user.name.split(" ")[0][0]}
                        {user.name.split(" ")[1][0]}
                      </Avatar>
                    </Box>
                    <Box width={"215px"}>
                      <Typography className="avtarname">
                        {" "}
                        {user.name}{" "}
                      </Typography>
                      <img src={user.callicon} className="smallcallicon"></img>
                      <span
                        className="callsdetails"
                        style={{
                          color:
                            user.calls === "Missed"
                              ? "red "
                              : user.calls === "Incoming"
                              ? "green"
                              : "#7a7a7a",
                        }}
                      >
                        {user.calls}
                      </span>
                    </Box>
                    <Box>
                      <Typography className="timeofcalls">
                        {user.time}
                      </Typography>
                      {/* <Box className={"infoicon"}></Box> */}
                      <InfoOutlinedIcon
                        sx={{
                          color: "#e72fe7",
                        }}
                        className={"infoicon"}
                      ></InfoOutlinedIcon>
                    </Box>
                  </Box>
                );
              } else if (user.status == isButton3Active) {
                return (
                  <Box className="backbox" display={"flex"}>
                    <Box>
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(180deg, #d92cc1 0%, #4d72f8 100%), #4d72f8 !important",
                        }}
                      >
                        {user.name.split(" ")[0][0]}
                        {user.name.split(" ")[1][0]}
                      </Avatar>
                    </Box>

                    <Box width={"215px"}>
                      <Typography className="avtarname">{user.name}</Typography>
                      <img src={user.callicon} className="smallcallicon"></img>
                      <span
                        className="callsdetails"
                        style={{
                          color:
                            user.calls === "Missed"
                              ? "red "
                              : user.calls === "Incoming"
                              ? "green"
                              : "#7a7a7a",
                        }}
                      >
                        {user.calls}
                      </span>
                    </Box>
                    <Box>
                      <Typography className="timeofcalls">
                        {user.time}
                      </Typography>
                      {/* <Box className={"infoicon"}></Box> */}
                      <InfoOutlinedIcon
                        sx={{
                          color: "#e72fe7",
                        }}
                        className={"infoicon"}
                      ></InfoOutlinedIcon>
                    </Box>
                  </Box>
                );
              }
            }).filter((item) => item)}
          </Box>
        </>
      )}
    </>
  );
}
