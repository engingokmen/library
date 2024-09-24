import React from "react";
import styled from "styled-components";
import {
  addMessage,
  changeInput,
  useAppData,
  useAppDipatch,
} from "../../context";
import { ButtonInputForm } from "./components/ButtonInputForm";
import { Input } from "./components/Input";

export const InputForm = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMessage(input));
    dispatch(changeInput(""));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input />
      <ButtonInputForm />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;
