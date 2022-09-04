import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type NumberBoxProps = {
  value: number;
  increment: () => void;
  decrement: () => void;
};
export const NumberBox = (props: NumberBoxProps): React.ReactElement => {
  return (
    <Row>
      <Col md="auto">
        <Button variant="rusty" onClick={props.decrement}>
          -
        </Button>
      </Col>
      <Col md="auto">
        <Form.Control type={"number"} readOnly={true} value={props.value} />
      </Col>
      <Col md="auto">
        <Button variant="rusty" onClick={props.increment}>
          +
        </Button>
      </Col>
    </Row>
  );
};
