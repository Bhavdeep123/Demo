import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Details({ filteredContacts, searchTerm }) {
  //   console.log(filteredContacts, "filteredContacts");
  //   console.log(searchTerm, "searchTerm");
  return (
    <Box
      sx={{
        height: "370px",
        border: "1px solid black",
        overflowX: "hidden",
      }}
    >
      {filteredContacts
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone.includes(searchTerm)
        )
        .map((item) => {
          return (
            <>
              <Box
                sx={{ padding: "10px" }}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Avatar>H</Avatar>
                <Box sx={{ paddingLeft: "20px" }} className="contact-list">
                  <Typography>{item.name}</Typography>
                  <Typography>{item.phone}</Typography>
                </Box>
              </Box>
            </>
          );
        })}
    </Box>
  );
}

export default Details;
