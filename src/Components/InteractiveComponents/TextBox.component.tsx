import React from "react";
import { Form } from "react-bootstrap";

type TextBoxProps = {
  value: string;
  onChange: any;
};
export const TextBox = (props: TextBoxProps): React.ReactElement => {
  return <Form.Control onChange={(e) => props.onChange(e.target.value)} style={{ marginTop: "5px" }} value={props.value} />;
};
