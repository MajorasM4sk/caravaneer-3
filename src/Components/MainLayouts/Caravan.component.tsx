import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Caravan = (): React.ReactElement => {
  const navigate = useNavigate();
  const btnLeaveHandler = () => {
    navigate("/map");
  };
  return (
    <>
      <div>Caravan</div>
      <Button onClick={btnLeaveHandler} size="lg" variant="dusty">
        LEAVE
      </Button>
    </>
  );
};
