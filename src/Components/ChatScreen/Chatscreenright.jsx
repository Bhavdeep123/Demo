import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// import { Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { dummyData } from "./anotherdummydata";
import Details from "./Details";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: "white",
  height: "44px",
  boxShadow: "5px 5px 21px 4px rgba(0, 0, 0, 0.08)",

  marginRight: theme.spacing(2),
  marginLeft: 0,
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
    [theme.breakpoints.up("md")]: {},
  },
}));

export const Chatscreenright = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyData);
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    // Filter contacts based on selected letter
    if (selectedLetter) {
      const filtered = dummyData.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!selectedLetter ||
            contact.name.charAt(0).toUpperCase() === selectedLetter)
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(dummyData);
    }
  }, [dummyData, searchTerm, selectedLetter]);
  const handleFilter = (letter) => {
    // Filter contacts based on selected letter
    setSelectedLetter(letter);
  };

  return (
    <Box>
      <Box className="chatscreenright">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "85px",
          }}
        >
          <Button sx={{ padding: "5px 5px", minWidth: "40px" }}>
            <HelpOutlineIcon className="help" />
          </Button>
          <Button sx={{ padding: "5px 5px", minWidth: "40px" }}>
            <SettingsIcon className="help" />
          </Button>
        </Box>
      </Box>
      <Box>
        <Box display={"flex"}>
          <Box className="contact-txt">Contact</Box>
          <Box sx={{ padding: "17px 0px 0px 120px" }}>
            <Button sx={{ padding: "5px 5px" }}>
              <AddIcon className="plus" />
            </Button>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "20px" }} textAlign={"center"}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Contact"
              className="searchplaceholder"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box display="flex" flexWrap="wrap">
                <Details
                  filteredContacts={filteredContacts}
                  searchTerm={searchTerm}
                ></Details>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ float: "right" }}
              >
                {[...Array(26)].map((value, index) => {
                  const letter = String.fromCharCode(index + 65);
                  return (
                    <Button
                      className="alp-btn"
                      key={letter}
                      onClick={() => handleFilter(letter)}
                      style={{
                        fontWeight:
                          selectedLetter === letter ? "bold" : "normal",
                      }}
                    >
                      {letter}
                    </Button>
                  );
                })}
              </Box>
            </Box>
          </Search>
        </Box>
      </Box>
    </Box>
  );
};
