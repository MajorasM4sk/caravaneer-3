import React, { useRef } from "react";
import { ButtonPrimary } from "../InteractiveComponents";
import { TextTitle } from "../TextComponents";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Title = (): React.ReactElement => {
  let body = useRef<HTMLBodyElement>(document.querySelector("body"));
  body.current.style.backgroundImage = "url(/background.jpg)";
  body.current.style.backgroundSize = "cover";
  body.current.style.backgroundRepeat = "no-repeat";
  body.current.style.backgroundPosition = "center";
  body.current.style.backgroundAttachment = "fixed";

  return (
    <Container>
      <TextTitle>Caravaneer 3</TextTitle>
      <Link to="/new-character">
        <ButtonPrimary>New game</ButtonPrimary>
      </Link>
      <ButtonPrimary>Load game</ButtonPrimary>
    </Container>
  );
};
