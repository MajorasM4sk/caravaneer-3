import React from "react";
import { Col, Row } from "react-bootstrap";

//Wrap with a LabelLeftGroup

type LabelLeftProps = {
  text: string;
  children?: React.ReactNode;
  colmd1: number;
  colmd2: number;
  hr: boolean;
};
export const LabelLeft = (props: LabelLeftProps): React.ReactElement => {
  return (
    <>
      <Row>
        <Col md={props.colmd1}>
          <span className="label">{props.text}</span>
        </Col>
        <Col md={props.colmd2}>{props.children}</Col>
      </Row>
      {props.hr ? <hr /> : ""}
    </>
  );
};
