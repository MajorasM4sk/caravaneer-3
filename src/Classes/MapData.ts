import React from "react";
import { Brush } from "../utils/Brush";
import { Maths } from "../utils/Maths";
import { Point } from "./Point";

export class MapData {
  paused: boolean;
  theta: number;
  lastFrame: number | null;
  gameSpeed: 1 | 2 | 3;
  fps?: number;
  playerLocation: Point;
  enemies?: { text?: string; location: Point }[];
  cities?: { text?: string; location: Point; isCapital?: boolean }[];

  public static updateMapLocation = (map: MapData, t: number) => {
    if (map.lastFrame !== null && !map.paused) {
      let norm = ((t - map.lastFrame) * map.gameSpeed) / 15;
      map.playerLocation.x += Math.cos(map.theta) * norm;
      map.playerLocation.y -= Math.sin(map.theta) * norm;
    }
    map.lastFrame = t;
  };

  public static setDirection = (map: MapData, p: Point) => {
    p.y *= -1;
    let distanceFromCenter = Math.sqrt(p.x * p.x + p.y * p.y);
    if (distanceFromCenter < Brush.PLAYER_SIZE) {
      map.paused = !map.paused;
    } else {
      map.paused = false;
      map.theta = Math.atan2(p.y, p.x);
    }
  };

  public static updateCursor(_: MapData, canvas: HTMLCanvasElement, cursor: Point) {
    let p = { x: 0, y: 0 };
    if (Maths.distance(p, cursor) < Brush.PLAYER_SIZE) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "default";
    }
  }
}
