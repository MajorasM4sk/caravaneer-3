import React from "react";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  onClick?: any;
};
export const ButtonPrimary = (props: ButtonPrimaryProps): React.ReactElement => {
  return (
    <button onClick={props.onClick} style={{ display: "block", marginBottom: "10px" }}>
      {props.children}
    </button>
  );
};
