import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Brush } from "../../utils/Brush";
import { useNavigate } from "react-router-dom";
import { SMap, MapData } from "../../Classes/Map";
import { Point } from "../../Classes/Point";
import { Ratio } from "../../utils/Ratio";
import { CityData, SCity } from "../../Classes/City";
import { Saver } from "../../utils/Saver";
import { CaravanData, SCaravan } from "../../Classes/Caravan";
import { DB } from "../../utils/DB";
import { CaravanDashboard } from "../SecondaryLayouts/CaravanDashboard";
import { ToStr } from "../../utils/Format";

const getCursorPosition = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>): Point => {
  const rect = canvas.getBoundingClientRect();
  return { x: event.clientX - rect.left - canvas.width / 2, y: event.clientY - rect.top - canvas.height / 2 };
};

const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cv = (): HTMLCanvasElement => canvasRef.current;

  const [map, setMap] = useState(DB.get("map") as MapData);
  const [date, setDate] = useState(ToStr.date(new Date(map.date)));
  let cities: CityData[] = DB.get("cities");
  const [caravan, setCaravan] = useState(DB.get("caravan") as CaravanData);

  const navigate = useNavigate();

  useEffect(() => {
    Ratio.updateRatio(cv());
    requestAnimationFrame(refresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.onresize = useCallback(() => {
    if (cv()) Ratio.updateRatio(cv());
  }, []);

  const canvasMouseDownHandler = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (SMap.setDirection(map, getCursorPosition(cv(), e), map.onCity)) {
      enterCity(cities.find((c) => c.text === map.onCity));
    }
  }, []);

  const canvasMouseMoveHandler = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    SMap.updateCursor(map, cv(), getCursorPosition(cv(), e));
  }, []);

  const enterCity = useCallback((city: CityData) => {
    Saver.saveMap(map, { city: city });
    navigate("/cities/" + city.text);
  }, []);

  const refresh = useCallback((t: number) => {
    let ellapsedHours = SMap.updateMap(map, t, SCaravan.getSpeedKmph(caravan));
    setMap(map);
    SCaravan.updateCaravan(caravan, ellapsedHours);
    setCaravan(caravan);
    let d = new Date(map.date).toISOString();
    setDate(d);
    if (cv()) {
      const ctx = cv().getContext("2d");
      Brush.refreshCanvas(ctx);
      SCity.drawCities(cv(), cities, map, enterCity);
      Brush.drawPlayer(ctx, map.theta - Math.PI / 2);
      Brush.drawDirtyScreen(ctx);
      requestAnimationFrame(refresh);
    }
  }, []);

  return (
    <Row>
      <Col style={{ paddingRight: 0 }}>
        <canvas onMouseDown={canvasMouseDownHandler} onMouseMove={canvasMouseMoveHandler} ref={canvasRef} />
      </Col>
      <Col style={{ paddingLeft: 0, backgroundColor: "rgb(74, 67, 52)" }}>
        <CaravanDashboard caravan={caravan} map={map} date={date} />
      </Col>
    </Row>
  );
};

export default Map;
