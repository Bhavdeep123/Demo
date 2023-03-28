import { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import Contact from "./Details";
import { dummyData } from "./anotherdummydata";

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(dummyData);
  const [selectedLetter, setSelectedLetter] = useState("");
  // const [numberselect, setNumberselect] = useState("");
  // console.log(filteredContacts);

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
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        <TextField
          label="Search contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <Button variant="contained" onClick={handleSearch}>
          Search
        </Button> */}
      </Box>
      <Box display="flex" flexWrap="wrap">
        <Contact
          filteredContacts={filteredContacts}
          searchTerm={searchTerm}
        ></Contact>
      </Box>
      <Box display="flex" flexDirection="column">
        {[...Array(26)].map((value, index) => {
          const letter = String.fromCharCode(index + 65);
          return (
            <Button
              key={letter}
              onClick={() => handleFilter(letter)}
              style={{
                fontWeight: selectedLetter === letter ? "bold" : "normal",
              }}
            >
              {letter}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "555-555-5555",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     phone: "555-555-5555",
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     email: "robert.johnson@example.com",
//     phone: "66666666666666",
//   },
//   {
//     id: 4,
//     name: "Alice Brown",
//     email: "alice.brown@example.com",
//     phone: "555-555-5555",
//   },
//   {
//     id: 5,
//     name: "Charlie Lee",
//     email: "charlie.lee@example.com",
//     phone: "555-555-5555",
//   },
//   {
//     id: 6,
//     name: "David Kim",
//     email: "david.kim@example.com",
//     phone: "555-555-5555",
//   },
//   {
//     id: 7,
//     name: "Emily Davis",
//     email: "emily.davis@example.com",
//     phone: "555-555-5555",
//   },
// ];

export default ContactList;
