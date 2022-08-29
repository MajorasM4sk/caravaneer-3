import React from "react";

type NumberBoxProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};
export const NumberBox = (props: NumberBoxProps): React.ReactElement => {
  return (
    <>
      <button onClick={props.decrement}>-</button>
      <input type={"number"} readOnly={true} value={props.value} />
      <button onClick={props.increment} style={{ marginTop: "5px" }}>
        +
      </button>
    </>
  );
};
