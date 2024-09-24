import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";
import { InputForm } from "./features/inputForm";
import { ComboBox } from "./features/comboBox";
import { Autosuggestion } from "./features/autoSuggestion";
import { ImageDisplay } from "./features/imageDisplay";
import { AppProvider } from "./context";
import { GlobalStyle } from "./component/GlobalStyle";
import { IMessage } from "./types";

const ChatApp = () => {
  return (
    <Laout>
      <Messages />
      <ComboBox />
      <Autosuggestion />
      <ImageDisplay />
      <InputForm />
    </Laout>
  );
};

interface ChatAppProps {
  messages: Array<IMessage>;
  onSentMessage: (value: IMessage) => void;
}

const App = ({ messages, onSentMessage }: ChatAppProps) => {
  return (
    <AppProvider messages={messages} onSentMessage={onSentMessage}>
      <ChatApp />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
