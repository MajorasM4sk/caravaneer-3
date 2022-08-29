import React from "react";

type TextBoxProps = {
  value: string;
  onChange: any;
};
export const TextBox = (props: TextBoxProps): React.ReactElement => {
  return <input onChange={(e) => props.onChange(e.target.value)} style={{ marginTop: "5px" }} value={props.value} />;
};
