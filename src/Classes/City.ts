import { Brush } from "../utils/Brush";
import { Ratio } from "../utils/Ratio";
import { MapData } from "./Map";
import { Point } from "./Point";

export class CityData {
  public text?: string;
  public location: Point;
  public isCapital?: boolean;
  //shops
}

export class SCity extends CityData {
  public static drawCities(canvas: HTMLCanvasElement, cities: CityData[], map: MapData, collisionCallback: any) {
    let ctx = canvas.getContext("2d");
    cities.forEach((obj) => {
      let p = Ratio.getPixelLocation(canvas, { x: obj.location.x - map.playerLocation.x, y: obj.location.y - map.playerLocation.y });
      if (obj.isCapital) {
        Brush.drawTown(ctx, p, obj.text);
      } else {
        Brush.drawTown(ctx, p, obj.text);
      }
      //detect collisions
      if (Ratio.playerTownCollision(canvas, map.playerLocation, obj.location)) {
        if (map.onCity === "") {
          collisionCallback(obj);
        }
      } else if (map.onCity) {
        map.onCity = "";
      }
    });
  }
}
