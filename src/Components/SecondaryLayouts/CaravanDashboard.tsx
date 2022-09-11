import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CaravanData, SCaravan } from "../../Classes/Caravan";
import { MapData } from "../../Classes/Map";
import { ToStr } from "../../utils/Format";
import { Saver } from "../../utils/Saver";
import { CenteredLabelAndValue } from "../TextComponents";

type CaravanDashboardProps = {
  caravan: CaravanData;
  map: MapData;
  date: string;
};
export const CaravanDashboard = (props: CaravanDashboardProps) => {
  let c = props.caravan;
  let m = props.map;

  const navigate = useNavigate();

  const btnCaravanHandler = () => {
    Saver.saveMap(m);
    navigate("/caravan");
  };
  return (
    <>
      <Button onClick={btnCaravanHandler} size="lg" variant="dusty">
        CARAVAN MENU
      </Button>
      <Button onClick={btnCaravanHandler} size="lg" variant="dusty">
        MAP
      </Button>
      <Button onClick={btnCaravanHandler} size="lg" variant="dusty">
        SETTINGS
      </Button>
      <hr />
      <CenteredLabelAndValue text="water" value={ToStr.nb(SCaravan.getLiquidQty(c, "water"))} unit="L" />
      <CenteredLabelAndValue text="food" value={ToStr.nb(SCaravan.getFoodQty(c))} unit="kcal" />
      <CenteredLabelAndValue text="medicine" value={ToStr.nb(SCaravan.getMedicineQty(c))} unit="g" />
      <CenteredLabelAndValue text="forage" value={ToStr.nb(SCaravan.getForageQty(c))} unit="kg" />
      {/* <CenteredLabelAndValue text="fuel" value="123" unit="L" />
      <CenteredLabelAndValue text="electricity" value="123" unit="W" /> */}
      <CenteredLabelAndValue text="money" value={c.money.toString()} />
      <CenteredLabelAndValue text="date" value={ToStr.date(new Date(m.date))} />
      <hr />
      {/* <CenteredLabelAndValue text="critically wounded people" value="123" />
      <CenteredLabelAndValue text="animal in poor condition" value="123" />
      <CenteredLabelAndValue text="mechanical problem" value="123" />
      <CenteredLabelAndValue text="other problem" value="123" />
      <CenteredLabelAndValue text="cargo (curr) ton" value="123" />
      <CenteredLabelAndValue text="cargo (max) ton" value="123" />
      <CenteredLabelAndValue text="date" value="123" />
      <CenteredLabelAndValue text="options" value="123" />
      <CenteredLabelAndValue text="1x" value="123" />
      <CenteredLabelAndValue text="2x" value="123" />
      <CenteredLabelAndValue text="3x" value="123" />
      <CenteredLabelAndValue text="pause" value="123" /> */}
    </>
  );
};
