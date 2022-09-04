import React from "react";
import { useParams } from "react-router-dom";

type CityProps = {};
export const City = (props: CityProps): React.ReactElement => {
  let { city } = useParams();
  return <div>{city} city</div>;
};
