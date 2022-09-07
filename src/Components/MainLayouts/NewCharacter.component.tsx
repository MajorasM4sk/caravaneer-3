import React, { useState } from "react";
import { LabelLeftGroup } from "../ComponentLayouts/LabelLeftGroup.component";
import { ButtonPrimary, NumberBox, TextBox } from "../InteractiveComponents";
import { TextTitle } from "../TextComponents";
import { LabelLeft } from "../TextComponents/LabelLeft.component";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Initializer } from "../../Initialize/Initializer";

export const NewCharacter = (): React.ReactElement => {
  localStorage.clear();

  const [physical, setPhysical] = useState(5);
  const [agility, setAgility] = useState(5);
  const [accuracy, setAccuracy] = useState(5);
  const [intelligence, setIntelligence] = useState(5);
  const [name, setName] = useState("Steve");

  const min = 1;
  const max = 10;
  const maxSum = 20;

  const decrementPhysical = () => {
    if (physical !== min) setPhysical(physical - 1);
  };
  const decrementAgility = () => {
    if (agility !== min) setAgility(agility - 1);
  };
  const decrementAccuracy = () => {
    if (accuracy !== min) setAccuracy(accuracy - 1);
  };
  const decrementIntelligence = () => {
    if (intelligence !== min) setIntelligence(intelligence - 1);
  };

  const incrementPhysical = () => {
    if (physical !== max && getSum() < maxSum) setPhysical(physical + 1);
  };
  const incrementAgility = () => {
    if (agility !== max && getSum() < maxSum) setAgility(agility + 1);
  };
  const incrementAccuracy = () => {
    if (accuracy !== max && getSum() < maxSum) setAccuracy(accuracy + 1);
  };
  const incrementIntelligence = () => {
    if (intelligence !== max && getSum() < maxSum) setIntelligence(intelligence + 1);
  };

  const getSum = () => {
    return physical + agility + accuracy + intelligence;
  };

  const navigate = useNavigate();
  const start = () => {
    Initializer.initGame(name, physical, agility, accuracy, intelligence);
    navigate("/map");
  };

  return (
    <Container>
      <Row className="form">
        <Col md="7">
          <Container className="light">
            <TextTitle>New character</TextTitle>
            <LabelLeftGroup>
              <LabelLeft text="Name" colmd1={3} colmd2={6} hr={true}>
                <TextBox value={name} onChange={setName} />
              </LabelLeft>
              <LabelLeft text={"Remaining points : " + (20 - physical - agility - accuracy - intelligence)} colmd1={12} colmd2={0} hr={true}></LabelLeft>
              <LabelLeft text="Physical" colmd1={3} colmd2={6} hr={true}>
                <NumberBox value={physical} increment={incrementPhysical} decrement={decrementPhysical} />
              </LabelLeft>
              <LabelLeft text="Agility" colmd1={3} colmd2={6} hr={true}>
                <NumberBox value={agility} increment={incrementAgility} decrement={decrementAgility} />
              </LabelLeft>
              <LabelLeft text="Accuracy" colmd1={3} colmd2={6} hr={true}>
                <NumberBox value={accuracy} increment={incrementAccuracy} decrement={decrementAccuracy} />
              </LabelLeft>
              <LabelLeft text="Intelligence" colmd1={3} colmd2={6} hr={false}>
                <NumberBox value={intelligence} increment={incrementIntelligence} decrement={decrementIntelligence} />
              </LabelLeft>
            </LabelLeftGroup>

            <ButtonPrimary onClick={start}>START</ButtonPrimary>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
