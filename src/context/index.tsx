import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Combobox, Direction, IMessage, IState } from "../types";

const initialValue = {
  messages: [],
  input: "",
  selectOptions: [
    "Combobox message 1",
    "Combobox message 2",
    "Combobox message 3",
    "Combobox message 4",
    "Combobox message 5",
  ],
  autoSuggestions: [
    "Hello!",
    "How are you?",
    "What's up?",
    "Thank you!",
    "You're welcome.",
    "Please.",
    "Sorry.",
    "No problem.",
    "Goodbye!",
    "See you later.",
    "Take care.",
    "Have a great day!",
    "Yes.",
    "No.",
    "Maybe.",
    "I don't know.",
    "Can you help me?",
    "Sure!",
    "Absolutely.",
    "Let's do it!",
  ],
  combobox: Combobox.null,
  image: "",
};

const AppContext = createContext<IState>(initialValue);
const AppDispatchContext = createContext<React.Dispatch<any>>(() => {});

export const AppProvider = ({
  children,
  messages,
  onSentMessage,
}: {
  children: ReactNode;
  messages: IMessage[];
  onSentMessage: (message: IMessage) => void;
}) => {
  const initial = { ...initialValue, messages };
  const [value, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    dispatch(setMessages(messages));
  }, [messages]);

  useEffect(() => {
    if (value.messages.length > messages.length) {
      const newMessage = value.messages[value.messages.length - 1];
      onSentMessage(newMessage);
    }
  }, [value.messages]);

  return (
    <AppContext.Provider value={value}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return { ...state, messages: action.payload };
    case "ADD_MESSAGE":
      let payload;
      if (action.payload.value.startsWith("/image")) {
        payload = { ...action.payload, value: state.image };
      } else {
        payload = { ...action.payload };
      }
      return { ...state, messages: [...state.messages, payload] };
    case "CHANGE_INPUT":
      return { ...state, input: action.payload };
    case "SET_COMBOBOX":
      return { ...state, combobox: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const useAppData = () => useContext(AppContext);
export const useAppDipatch = () => useContext(AppDispatchContext);

export const setMessages = (value: IMessage[]) => ({
  type: "SET_MESSAGES",
  payload: value,
});

export const changeInput = (value: string) => ({
  type: "CHANGE_INPUT",
  payload: value,
});

export const addMessage = (value: string) => ({
  type: "ADD_MESSAGE",
  payload: { direction: Direction.Sent, value },
});

export const setCombobox = (value: Combobox) => ({
  type: "SET_COMBOBOX",
  payload: value,
});

export const setImage = (value: string) => ({
  type: "SET_IMAGE",
  payload: value,
});
