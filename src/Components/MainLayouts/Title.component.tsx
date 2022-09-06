import React from "react";
import { ButtonPrimary } from "../InteractiveComponents";
import { TextTitle } from "../TextComponents";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Title = (): React.ReactElement => {
  localStorage.clear();
  return (
    <Container>
      <TextTitle>CARAVANEER 3</TextTitle>
      <Link to="/new-character">
        <ButtonPrimary>NEW GAME</ButtonPrimary>
      </Link>
      <ButtonPrimary>LOAD GAME</ButtonPrimary>
    </Container>
  );
};
