import React from "react";
import styled from "styled-components";
import { changeInput, useAppData, useAppDipatch } from "../../../context";

export const Input = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value));
  };

  return (
    <Inpu
      id="input-chat"
      type="text"
      list="autosuggestions"
      value={input}
      onChange={handleChange}
      placeholder="Type a message..."
      autoComplete="off"
    />
  );
};

const Inpu = styled.input`
  width: 100%;
  // height: 100%;
  outline: none;
  resize: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-family: "Roboto", sans-serif;
  color: var(--blue);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
