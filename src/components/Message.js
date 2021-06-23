import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const user = username === message.username;

  return (
    <div ref={ref} className={`message ${user && "message-user"}`}>
      <Card>
        <CardContent
          className={user ? "message-userCard" : "message-guestCard"}
        >
          <Typography color="white" variant="h5" component="h2">
            {!user && `${message.username || "Unknown user:"} `}  {message.message} 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
