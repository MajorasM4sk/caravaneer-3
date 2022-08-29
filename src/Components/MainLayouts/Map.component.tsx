import React from "react";
import { TextTitle } from "../TextComponents";

export const Map = (): React.ReactElement => {
  console.log(sessionStorage.getItem("protagonist"));
  return <TextTitle>Map</TextTitle>;
};
