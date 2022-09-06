import React from "react";
import { Col, Row } from "react-bootstrap";

//Wrap with a LabelLeftGroup

type LabelLeftProps = {
  text: string;
  value: string;
  unit?: string;
};
export const CenteredLabelAndValue = (props: LabelLeftProps): React.ReactElement => {
  return (
    <Row style={{ fontSize: "22px", color: "rgb(247, 181, 42)" }}>
      <Col md="5" style={{ textAlign: "right" }}>
        {props.text}
      </Col>
      <Col md="4">{props.value}</Col>
      {props.unit ? <Col md="3">({props.unit})</Col> : <></>}
    </Row>
  );
};
