import React from "react";
import styled from "styled-components";
import { useAppData } from "../../../context";

export const ButtonInputForm = () => {
  const { input } = useAppData();

  const isDisabled = input.trim() === "";

  return (
    <Button type="submit" disabled={isDisabled}>
      Send
    </Button>
  );
};

const Button = styled.button`
  background-color: var(--blue);
  color: var(--pale-yellow);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: var(--pale-purple);
    color: var(--blue);
  }
`;
