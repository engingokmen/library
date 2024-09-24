export interface IState {
  messages: IMessage[];
  input: string;
  selectOptions: Array<string>;
  autoSuggestions: Array<string>;
  combobox: Combobox;
  image: string;
}

export interface IMessage {
  direction: Direction;
  value: string;
}

export interface IAction {
  type: string;
  payload: string;
}

export enum Combobox {
  null,
  Select,
  Autocomplete,
  Image,
}

export enum Direction {
  Received,
  Sent,
}
