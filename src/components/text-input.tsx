import React, { BaseSyntheticEvent, SyntheticEvent } from "react";

type ITextInput = {
  title: string;
  state: number;
  setState: (val: any) => void;
};

const TextInput = ({ title, state, setState }: ITextInput) => {
  return (
    <React.Fragment>
      <span>{title}</span>
      <input
        type="number"
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
      />
    </React.Fragment>
  );
};

export default TextInput;
