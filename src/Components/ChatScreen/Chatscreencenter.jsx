import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "../../Images/Avatar.png";
import MenuVertical from "../../Images/MenuVertical.png";
import { Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import calendar from "../../Images/calendar.png";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import send from "../../Images/send.png";
import { fontSize } from "@mui/system";
import Receiverdummy from "../Receiverdummy";

const Chatscreencenter = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // YYYY-MM-DDTHH:mm:ss.sssZ === isoDate format
    const message = { text: newMessage, timestamp: new Date().toISOString() };
    setMessages([...messages, message]);
    setNewMessage("");
  }

  const options = { hour12: true };

  return (
    <>
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
              sx={{
                alignItems: "center",
                display: "flex",
                marginLeft: "320px",
              }}
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

      <Box className="chatback">
        {/* <Box className="receiver">
          <Receiverdummy />
        </Box> */}
        <Box className="receiver">
          <Receiverdummy />
        </Box>
        <Box>
          {messages.map((message, index) => {
            return (
              <Box
                key={index}
                className={message.sender === "Data" ? "receiver" : "sender"}
              >
                <Box className="message">
                  <Typography className="message-text">
                    {message.text}
                  </Typography>

                  <Typography className="timestamp">
                    {/* i am return react fragment because it shows error that typography have one chile element accept  */}
                    {new Date(message.timestamp)
                      .toLocaleTimeString([], options)
                      .replace(/:\d{2}\s/, " ")}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="centerlastback" display={"flex"}>
        <Box>
          <Button className="attachbtn">
            <AttachFileIcon className="attachicon" />
          </Button>
          <Button className="attachbtn">
            <img src={calendar}></img>
          </Button>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <input
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
              type="text"
              placeholder="Type Message here"
              className="inputmessage"
            ></input>
            <Button className="smile">
              <EmojiEmotionsIcon sx={{ fontSize: "26px", color: "grey" }} />
            </Button>
            <Button className="voice">
              <KeyboardVoiceIcon sx={{ fontSize: "26px", color: "grey" }} />
            </Button>
            <Button type="submit">
              <img src={send} className="sendimg"></img>
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Chatscreencenter;

// import React, { useState } from 'react';

//  export function App() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     const message = { text: newMessage, timestamp: new Date().toISOString() };
//     setMessages([...messages, message]);
//     setNewMessage('');
//   }

//   return (
//     <div className="App">
//       <div className="header">
//         <h1>Messaging App</h1>
//       </div>
//       <div className="container">
//         <div className="messages-panel">
//           {messages.map((message, index) => (
//             <div key={index} className="message">
//               <p>{message.text}</p>
//               <p className="timestamp">{new Date(message.timestamp).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//         <div className="compose-panel">
//           <form onSubmit={handleSubmit}>
//             <textarea
//               value={newMessage}
//               onChange={(event) => setNewMessage(event.target.value)}
//               placeholder="Type a message..."
//             />
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
