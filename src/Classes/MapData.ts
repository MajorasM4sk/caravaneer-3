import { Brush } from "../utils/Brush";
import { Point } from "./Point";

export class MapData {
  theta: number;
  lastFrame: number | null;
  gameSpeed: 0 | 1 | 2 | 3;
  fps?: number;
  location: Point;
  objects?: { type: "town" | "city" | "player" | "ennemy"; text?: string; location: Point; onCollideCallback?: (...args: any[]) => any }[];

  public static updateMapLocation = (map: MapData, t: number) => {
    if (map.lastFrame !== null) {
      let norm = ((t - map.lastFrame) * map.gameSpeed) / 15;
      map.location.x += Math.cos(map.theta) * norm;
      map.location.y -= Math.sin(map.theta) * norm;
    }
    map.lastFrame = t;
  };

  public static setDirection = (map: MapData, p: Point) => {
    p.y *= -1;
    let distanceFromCenter = Math.sqrt(p.x * p.x + p.y * p.y);
    if (distanceFromCenter < Brush.PLAYER_SIZE) {
      map.gameSpeed = 0;
    } else {
      if (map.gameSpeed === 0) {
        map.gameSpeed = 1;
      }
      map.theta = Math.atan2(p.y, p.x);
    }
  };
}
