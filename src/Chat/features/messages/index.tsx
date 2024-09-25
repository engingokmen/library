import React from "react";
import styled from "styled-components";
import { useAppData } from "../../context";
import { Message } from "./Message";

export const Messages = () => {
  const { messages } = useAppData();

  const messagesList = messages.map(({ value, direction }, index) => (
    <Message key={index} value={value} direction={direction} />
  ));

  return <Ul>{messagesList}</Ul>;
};

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
`;
