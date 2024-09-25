import React from "react";
import { useAppData } from "../../context";

export const Autosuggestion = () => {
  const { input, autoSuggestions } = useAppData();

  // filters autosuggestions based on input
  const autoSuggestionFilteredList = autoSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(input.toLowerCase())
  );

  // maps filtered autosuggestions to options
  const options = autoSuggestionFilteredList.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  const equalToInput =
    autoSuggestionFilteredList.length === 1 &&
    autoSuggestionFilteredList[0] === input;

  const show = input.length > 2 && !equalToInput;

  return show ? <datalist id="autosuggestions">{options}</datalist> : null;
};
