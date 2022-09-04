import React, { useEffect, useRef } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Brush } from "../../utils/Brush";
import { NavLink, useNavigate } from "react-router-dom";
import { MapData } from "../../Classes/MapData";
import { Point } from "../../Classes/Point";
import { Maths } from "../../utils/Maths";

const getCursorPosition = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>): Point => {
  const rect = canvas.getBoundingClientRect();
  return { x: event.clientX - rect.left - canvas.width / 2, y: event.clientY - rect.top - canvas.height / 2 };
};

const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasRef.current.width = 1150;
    canvasRef.current.height = 769;
  }, []);

  const navigate = useNavigate();
  const enterCity = (city: string) => {
    navigate("/cities/" + city);
  };

  let map: MapData = {
    paused: false,
    theta: Math.PI / 2,
    lastFrame: null,
    gameSpeed: 1,
    fps: 30,
    playerLocation: { x: 0, y: 0 },
    cities: [{ text: "Junkyard", location: { x: 0, y: -100 }, isCapital: false }],
  };

  const canvasClickHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    MapData.setDirection(map, getCursorPosition(canvasRef.current, e));
  };

  const canvasMouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    MapData.updateCursor(map, canvasRef.current, getCursorPosition(canvasRef.current, e));
  };

  const detectPlayerCollisions = (p: Point, radius: number, callback: () => void) => {
    if (Maths.distance(p, { x: p.x - map.playerLocation.x, y: map.playerLocation.y }) < radius) {
      callback();
    }
  };

  const refresh = (t: number) => {
    MapData.updateMapLocation(map, t);
    const ctx = canvasRef.current.getContext("2d");
    Brush.refreshCanvas(ctx);
    map.cities.forEach((obj) => {
      if (obj.isCapital) {
        Brush.drawTown(ctx, obj.location.x - map.playerLocation.x, obj.location.y - map.playerLocation.y, obj.text);
      } else {
        Brush.drawTown(ctx, obj.location.x - map.playerLocation.x + ctx.canvas.width / 2, obj.location.y - map.playerLocation.y + ctx.canvas.height / 2, obj.text);
      }
      //detect collisions
      detectPlayerCollisions(obj.location, Brush.STUFF_SIZE, () => {
        enterCity(obj.text);
      });
    });
    Brush.drawPlayer(ctx, map.theta - Math.PI / 2);
    Brush.drawDirtyScreen(ctx);

    requestAnimationFrame(refresh);
  };

  requestAnimationFrame(refresh);

  return (
    <Row>
      <Col>
        <canvas onMouseDown={canvasClickHandler} onMouseMove={canvasMouseMoveHandler} ref={canvasRef} />
      </Col>
      <Col>
        <Container>
          <Row>
            <NavLink to="/caravan">
              <div className="d-grid gap-2">
                <Button size="lg" variant="dusty">
                  CARAVAN MENU
                </Button>
              </div>
            </NavLink>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default React.memo(Map);
