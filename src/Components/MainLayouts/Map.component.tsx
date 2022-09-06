import React, { useEffect, useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Brush } from "../../utils/Brush";
import { useNavigate } from "react-router-dom";
import { SMap, MapData } from "../../Classes/Map";
import { Point } from "../../Classes/Point";
import { Ratio } from "../../utils/Ratio";
import { CityData } from "../../Classes/City";
import { Saver } from "../../utils/Saver";
import { CaravanData, SCaravan } from "../../Classes/Caravan";
import { DB } from "../../utils/DB";
import { CenteredLabelAndValue } from "../TextComponents";

const getCursorPosition = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>): Point => {
  const rect = canvas.getBoundingClientRect();
  return { x: event.clientX - rect.left - canvas.width / 2, y: event.clientY - rect.top - canvas.height / 2 };
};

const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cv = (): HTMLCanvasElement => canvasRef.current;

  let map: MapData = DB.get("map");
  let cities: CityData[] = DB.get("cities");
  let caravan: CaravanData = DB.get("caravan");

  const navigate = useNavigate();

  useEffect(() => {
    Ratio.updateRatio(cv());
    requestAnimationFrame(refresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.onresize = () => {
    if (cv()) Ratio.updateRatio(cv());
  };

  const canvasMouseDownHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (SMap.setDirection(map, getCursorPosition(cv(), e), map.onCity)) {
      enterCity(cities.find((c) => c.text === map.onCity));
    }
  };

  const canvasMouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    SMap.updateCursor(map, cv(), getCursorPosition(cv(), e));
  };

  const btnTeleportHandler = () => {
    map.playerLocation.x = 0;
    map.playerLocation.y = 0;
  };

  const btnCaravanHandler = () => {
    Saver.saveMap(map);
    navigate("/caravan");
  };

  const enterCity = (city: CityData) => {
    console.log(new Date().getTime());
    Saver.saveMap(map, { city: city });
    navigate("/cities/" + city.text);
  };

  const refresh = (t: number) => {
    SMap.updateMapLocation(map, t, SCaravan.getSpeedKmph(caravan));
    if (cv()) {
      const ctx = cv().getContext("2d");
      Brush.refreshCanvas(ctx);
      cities.forEach((obj) => {
        let p = Ratio.getPixelLocation(cv(), { x: obj.location.x - map.playerLocation.x, y: obj.location.y - map.playerLocation.y });
        if (obj.isCapital) {
          Brush.drawTown(ctx, p, obj.text);
        } else {
          Brush.drawTown(ctx, p, obj.text);
        }
        //detect collisions
        if (Ratio.playerTownCollision(cv(), map.playerLocation, obj.location)) {
          if (map.onCity === "") {
            enterCity(obj);
          }
        } else if (map.onCity) {
          map.onCity = "";
        }
      });
      Brush.drawPlayer(ctx, map.theta - Math.PI / 2);
      Brush.drawDirtyScreen(ctx);
      requestAnimationFrame(refresh);
    }
  };

  return (
    <Row>
      <Col style={{ paddingRight: 0 }}>
        <canvas onMouseDown={canvasMouseDownHandler} onMouseMove={canvasMouseMoveHandler} ref={canvasRef} />
      </Col>
      <Col style={{ paddingLeft: 0, backgroundColor: "rgb(74, 67, 52)" }}>
        <Button onClick={btnCaravanHandler} size="lg" variant="dusty">
          CARAVAN MENU
        </Button>
        <Button onClick={btnTeleportHandler} size="lg" variant="dusty">
          MAP
        </Button>
        <Button onClick={btnTeleportHandler} size="lg" variant="dusty">
          SETTINGS
        </Button>
        <hr />
        <CenteredLabelAndValue text="water" value="12345" unit="L" />
        <CenteredLabelAndValue text="food" value="123 123 154 321" unit="kcal" />
        <CenteredLabelAndValue text="medicine" value="123" unit="g" />
        <CenteredLabelAndValue text="forage" value="123" unit="kg" />
        <CenteredLabelAndValue text="fuel" value="123" unit="L" />
        <CenteredLabelAndValue text="electricity" value="123" unit="W" />
        <CenteredLabelAndValue text="money" value="123" />
        <hr />
        <CenteredLabelAndValue text="critically wounded people" value="123" />
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
        <CenteredLabelAndValue text="pause" value="123" />
      </Col>
    </Row>
  );
};

export default React.memo(Map);
