import React, { useState } from "react";
import { LabelLeftGroup } from "../ComponentLayouts/LabelLeftGroup.component";
import { ButtonPrimary, NumberBox, TextBox } from "../InteractiveComponents";
import { TextTitle } from "../TextComponents";
import { LabelLeft } from "../TextComponents/LabelLeft.component";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export const NewCharacter = (): React.ReactElement => {
  const onNameChange = (name: string) => {
    setName(name);
  };

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

  const [physical, setPhysical] = useState(5);
  const [agility, setAgility] = useState(5);
  const [accuracy, setAccuracy] = useState(5);
  const [intelligence, setIntelligence] = useState(5);
  const [name, setName] = useState("Steve");

  const getSum = () => {
    return physical + agility + accuracy + intelligence;
  };

  const navigate = useNavigate();
  const start = () => {
    sessionStorage.setItem(
      "protagonist",
      JSON.stringify({
        physical: physical,
        agility: agility,
        accuracy: accuracy,
        intelligence: intelligence,
      })
    );
    navigate("/map");
  };

  return (
    <Container>
      <TextTitle>New character</TextTitle>
      <LabelLeftGroup>
        <LabelLeft text="Name">
          <TextBox value={name} onChange={setName} />
        </LabelLeft>
        <LabelLeft text="Physical">
          <NumberBox value={physical} increment={incrementPhysical} decrement={decrementPhysical} />
        </LabelLeft>
        <LabelLeft text="Agility">
          <NumberBox value={agility} increment={incrementAgility} decrement={decrementAgility} />
        </LabelLeft>
        <LabelLeft text="Accuracy">
          <NumberBox value={accuracy} increment={incrementAccuracy} decrement={decrementAccuracy} />
        </LabelLeft>
        <LabelLeft text="Intelligence">
          <NumberBox value={intelligence} increment={incrementIntelligence} decrement={decrementIntelligence} />
        </LabelLeft>
      </LabelLeftGroup>

      <ButtonPrimary onClick={start}>Start</ButtonPrimary>
    </Container>
  );
};
