import React from "react";

//Wrap with a LabelLeftGroup

type LabelLeftProps = {
  text: string;
  children: React.ReactNode;
};
export const LabelLeft = (props: LabelLeftProps): React.ReactElement => {
  return (
    <tr>
      <td>{props.text}</td>
      <td style={{ paddingLeft: "20px" }}>{props.children}</td>
    </tr>
  );
};
