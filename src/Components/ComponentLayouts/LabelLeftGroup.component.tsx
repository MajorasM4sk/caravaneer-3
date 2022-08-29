import React from "react";

type LabelLeftGroupProps = {
  children: React.ReactNode;
};
export const LabelLeftGroup = (props: LabelLeftGroupProps): React.ReactElement => {
  return (
    <table style={{ marginBottom: "10px" }}>
      <tbody>{props.children}</tbody>
    </table>
  );
};
