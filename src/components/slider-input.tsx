import React from "react";
import { numberWithCommas } from "../utility/config";

type ISliderInput = {
  title: string;
  state: number;
  min: number;
  max: number;
  onChange: () => any;
  labelMin?: string;
  labelMax?: string;
  underlineTitle: string;
};

const SliderInput = ({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle,
}: ISliderInput) => {
  return (
    <React.Fragment>
      <span className="title">{title}</span>
      {state > 0 && (
        <span className="title" style={{ textDecoration: "underline" }}>
          {underlineTitle}
        </span>
      )}
      <div>
        <input
          type="range"
          min={min}
          max={max}
          className="slider"
          value={state}
          onChange={onChange}
        />
        <div className="lables">
          <label>{labelMin ?? numberWithCommas(min)}</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SliderInput;
