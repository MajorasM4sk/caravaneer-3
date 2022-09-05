import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

type CityProps = {};
export const City = (props: CityProps): React.ReactElement => {
  let { city } = useParams();

  const navigate = useNavigate();
  const btnLeaveHandler = () => {
    navigate("/map");
  };

  return (
    <>
      <div>{city}</div>
      <Button onClick={btnLeaveHandler} size="lg" variant="dusty">
        LEAVE
      </Button>
    </>
  );
};
