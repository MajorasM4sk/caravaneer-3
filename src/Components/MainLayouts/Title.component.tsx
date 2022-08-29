import React from "react";
import { ButtonPrimary } from "../InteractiveComponents";
import { TextTitle } from "../TextComponents";
import { Link } from "react-router-dom";

export const Title = (): React.ReactElement => {
  return (
    <>
      <TextTitle>Caravaneer 3</TextTitle>
      <Link to="/new-character">
        <ButtonPrimary>New game</ButtonPrimary>
      </Link>
      <ButtonPrimary>Load game</ButtonPrimary>
    </>
  );
};
