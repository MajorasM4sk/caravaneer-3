import React, { useEffect, useRef } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Brush } from "../../utils/Brush";
import { useNavigate } from "react-router-dom";
import { SMap, MapData } from "../../Classes/Map";
import { Point } from "../../Classes/Point";
import { Ratio } from "../../utils/Ratio";
import { CityData } from "../../Classes/City";

const getCursorPosition = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>): Point => {
  const rect = canvas.getBoundingClientRect();
  return { x: event.clientX - rect.left - canvas.width / 2, y: event.clientY - rect.top - canvas.height / 2 };
};

const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cv = (): HTMLCanvasElement => canvasRef.current;

  useEffect(() => {
    cv().width = window.innerWidth * 0.75;
    cv().height = window.innerHeight;
    let ratio = window.innerHeight / 769;
    Ratio.setWindowRatio(ratio);
    cv().getContext("2d").lineWidth = ratio;
    requestAnimationFrame(refresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let map: MapData = JSON.parse(localStorage.getItem("map"));
  let cities: CityData[] = JSON.parse(localStorage.getItem("cities"));

  const canvasClickHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
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

  const navigate = useNavigate();

  const enterCity = (city: CityData) => {
    save({ city: city });
    navigate("/cities/" + city.text);
  };

  const btnCaravanHandler = () => {
    save();
    navigate("/caravan");
  };

  const save = (options?: { city?: CityData }) => {
    if (options?.city) {
      map.playerLocation.x = options.city.location.x;
      map.playerLocation.y = options.city.location.y;
      map.onCity = options.city.text;
    }
    map.lastFrame = null;
    map.paused = true;
    localStorage.setItem("map", JSON.stringify(map));
  };

  const refresh = (t: number) => {
    SMap.updateMapLocation(map, t);
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
        if (Ratio.playerTownCollision(cv(), obj.location, map.playerLocation)) {
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
      <Col>
        <canvas onMouseDown={canvasClickHandler} onMouseMove={canvasMouseMoveHandler} ref={canvasRef} />
      </Col>
      <Col>
        <Container>
          <Row>
            <div className="d-grid gap-2">
              <Button onClick={btnCaravanHandler} size="lg" variant="dusty">
                CARAVAN MENU
              </Button>
              <Button onClick={btnTeleportHandler} size="lg" variant="dusty">
                teleport to (0, 0)
              </Button>
            </div>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default React.memo(Map);
