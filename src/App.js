import React, { useState, useEffect } from "react";
import "./App.css";
import FlipMove from "react-flip-move";

//Component Imports
import Message from "./components/Message";

//Material UI
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

//Firebase
import { db } from "./fire";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const clearInput = () => {
    setInput("");
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    clearInput("");
  };

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
      <form className="main-form">
        <FormControl className="app-formControl">
          <Input
            className="app-input"
            placeholder="Enter your message"
            onChange={onChangeHandler}
            value={input}
          />
          <IconButton
            className="app-iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessages}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
