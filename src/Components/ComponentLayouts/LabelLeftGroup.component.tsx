import React from "react";

type LabelLeftGroupProps = {
  children: React.ReactNode;
};
export const LabelLeftGroup = (props: LabelLeftGroupProps): React.ReactElement => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div>{props.children}</div>
    </div>
  );
};
