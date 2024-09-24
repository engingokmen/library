import React from "react";
import { createRoot } from "react-dom/client";
import App from "./index";
import { Direction, IMessage } from "./types";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

const messages = [
  { direction: Direction.Received, value: "Received1" },
  { direction: Direction.Sent, value: "Sent2" },
  { direction: Direction.Received, value: "Received2" },
  { direction: Direction.Sent, value: "Sent3" },
  { direction: Direction.Received, value: "Received3" },
];

const onSentMessage = (message: IMessage) => {
  console.log(message);
};

root.render(<App messages={messages} onSentMessage={onSentMessage} />);
