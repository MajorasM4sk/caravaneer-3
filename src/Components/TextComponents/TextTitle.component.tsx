import React from "react";

type TextTitleProps = {
  children: React.ReactNode;
};
export const TextTitle = (props: TextTitleProps): React.ReactElement => {
  return <h3 style={{ fontWeight: "1000", fontSize: "50px" }}>{props.children}</h3>;
};
