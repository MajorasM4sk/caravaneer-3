import React from "react";

type TextTitleProps = {
  children: React.ReactNode;
};
export const TextTitle = (props: TextTitleProps): React.ReactElement => {
  return <h3>{props.children}</h3>;
};
