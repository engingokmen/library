import React, { useEffect, useRef } from "react";
import {
  changeInput,
  setCombobox,
  useAppData,
  useAppDipatch,
} from "../../context";
import { Combobox } from "../../../types";
import styled from "styled-components";

export const ComboBox = () => {
  const { input, selectOptions } = useAppData();
  const dispatch = useAppDipatch();
  const ref = useRef<HTMLSelectElement>(null);

  const show = input.length > 0 && input === "/select";

  useEffect(() => {
    if (show && ref.current) {
      dispatch(setCombobox(Combobox.Select));
      ref.current.focus();
    } else {
      dispatch(setCombobox(Combobox.null));
    }
  }, [input]);

  const options = selectOptions.map((option) => (
    <option key={option}>{option}</option>
  ));

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCombobox(Combobox.null));
    dispatch(changeInput(e.target.value));
    const inputElement = document.querySelector(
      "#input-chat"
    ) as HTMLInputElement;
    inputElement?.focus();
  };

  return (
    <Select ref={ref} $show={show} onChange={handleOnChange}>
      {options}
    </Select>
  );
};

const Select = styled.select<{ $show: boolean }>(
  ({ $show }) => `
    display: ${$show ? "block" : "none"};
    color: var(--blue);
    height: 2rem;
`
);
