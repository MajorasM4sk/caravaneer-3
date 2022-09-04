import React, { useEffect, useRef, useState } from "react";
import "../../index.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Brush } from "../../utils/Brush";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export const Map = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x, setX] = useState(0);

  const refresh = () => {
    const ctx = canvasRef.current.getContext("2d");
    Brush.refreshCanvas(ctx);
    Brush.drawTown(ctx, ctx.canvas.width / 2, 0);
    Brush.drawPlayer(ctx);
    Brush.drawDirtyScreen(ctx);
    setX(x - 1);
  };

  const [counter, setCounter] = useState(0);

  useInterval(() => {
    refresh();
    setCounter(counter + 1);
  }, 10);

  return (
    <Row>
      <Col>
        <canvas ref={canvasRef} />
      </Col>
      <Col>
        <Button onClick={refresh}>Refresh</Button>
      </Col>
    </Row>
  );
};
