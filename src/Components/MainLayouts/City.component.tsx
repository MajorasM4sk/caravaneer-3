import React from "react";

type CityProps = {
  name: string;
};
export const City = (props: CityProps): React.ReactElement => {
  return <div>{props.name} city</div>;
};
