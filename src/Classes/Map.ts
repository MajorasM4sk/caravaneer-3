import { Maths } from "../utils/Maths";
import { Ratio } from "../utils/Ratio";
import { Point } from "./Point";

export class MapData {
  onCity: string;
  paused: boolean;
  theta: number;
  lastFrame: number | null;
  gameSpeed: 1 | 2 | 3;
  fps?: number;
  playerLocation: Point;
  enemies?: { text?: string; location: Point }[];
  date: number;
}

export class SMap {
  //returns time elapsed in (game time) hours since last frame
  public static updateMap = (map: MapData, t: number, caravanSpeedKmph: number): number => {
    let hourDiff = 0;
    if (map.lastFrame !== null && !map.paused) {
      let diff = t - map.lastFrame;
      hourDiff = diff / 500; //500ms real life = 1h game time
      map.date = map.date + hourDiff * 3600000; //milliseconds in an hour
      let norm = (diff * map.gameSpeed) / 15;
      map.playerLocation.x += Math.cos(map.theta) * norm * Ratio.getSpeedRatioFor(caravanSpeedKmph);
      map.playerLocation.y -= Math.sin(map.theta) * norm * Ratio.getSpeedRatioFor(caravanSpeedKmph);
    }
    map.lastFrame = t;
    return hourDiff;
  };

  //return true if player wants to enter the city
  public static setDirection = (map: MapData, p: Point, onCity: string): boolean => {
    p.y *= -1;
    let distanceFromCenter = Math.sqrt(p.x * p.x + p.y * p.y);
    if (distanceFromCenter < Ratio.getPlayerSize()) {
      if (onCity !== "") {
        return true;
      } else {
        map.paused = !map.paused;
      }
    } else {
      map.paused = false;
      map.theta = Math.atan2(p.y, p.x);
    }
    return false;
  };

  public static updateCursor(_: MapData, canvas: HTMLCanvasElement, cursor: Point) {
    let p = { x: 0, y: 0 };
    if (Maths.distance(p, cursor) < Ratio.getPlayerSize()) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "default";
    }
  }
}
