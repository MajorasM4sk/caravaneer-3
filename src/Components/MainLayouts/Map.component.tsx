import React, { useRef } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Brush } from "../../utils/Brush";
import { NavLink } from "react-router-dom";
import { MapData } from "../../Classes/MapData";
import { Point } from "../../Classes/Point";

const getCursorPosition = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>): Point => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x: x, y: y };
};

const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const openCity = (city: string) => {};

  let map: MapData = {
    theta: Math.PI / 2,
    lastFrame: null,
    gameSpeed: 1,
    fps: 30,
    location: { x: 0, y: 0 },
    objects: [
      { type: "town", text: "Junkyard", location: { x: 0, y: -100 }, onCollideCallback: openCity },
      {
        type: "player",
        text: "",
        location: { x: 0, y: 0 },
        onCollideCallback: undefined,
      },
    ],
  };

  const canvasClickHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    let p = getCursorPosition(canvasRef.current, e);
    p.x -= canvasRef.current.width / 2;
    p.y -= canvasRef.current.height / 2;
    MapData.setDirection(map, p);
  };

  const refresh = (t: number) => {
    MapData.updateMapLocation(map, t);
    const ctx = canvasRef.current.getContext("2d");
    Brush.refreshCanvas(ctx);
    map.objects.forEach((obj) => {
      switch (obj.type) {
        case "city":
          Brush.drawTown(ctx, obj.location.x - map.location.x, obj.location.y - map.location.y, obj.text);
          break;
        case "player":
          Brush.drawPlayer(ctx, map.theta - Math.PI / 2);
          break;
        case "ennemy":
          Brush.drawTown(ctx, ctx.canvas.width / 2, 0, obj.text);
          break;
        case "town":
          Brush.drawTown(ctx, obj.location.x - map.location.x + ctx.canvas.width / 2, obj.location.y - map.location.y + ctx.canvas.height / 2, obj.text);
          break;
      }
    });
    Brush.drawDirtyScreen(ctx);
    requestAnimationFrame(refresh);
  };

  requestAnimationFrame(refresh);

  return (
    <Row>
      <Col>
        <canvas onMouseDown={canvasClickHandler} ref={canvasRef} />
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
