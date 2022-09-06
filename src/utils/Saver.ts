import { CityData } from "../Classes/City";
import { MapData } from "../Classes/Map";

export class Saver {
  public static saveMap = (map: MapData, options?: { city?: CityData }) => {
    if (options?.city) {
      map.playerLocation.x = options.city.location.x;
      map.playerLocation.y = options.city.location.y;
      map.onCity = options.city.text;
    }
    map.lastFrame = null;
    map.paused = true;
    localStorage.setItem("map", JSON.stringify(map));
  };
}
