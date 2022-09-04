import React from "react";
import { Button, Col, Row } from "react-bootstrap";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  onClick?: any;
};
export const ButtonPrimary = (props: ButtonPrimaryProps): React.ReactElement => {
  return (
    <Row>
      <Col md="4">
        <div className="d-grid gap-2">
          <Button size="lg" variant="rusty" onClick={props.onClick}>
            {props.children}
          </Button>
        </div>
      </Col>
    </Row>
  );
};
