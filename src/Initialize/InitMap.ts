import { MapData } from "../Classes/Map";

const initialMap: MapData = {
  onCity: "",
  paused: false,
  theta: Math.PI / 2,
  lastFrame: null,
  gameSpeed: 1,
  fps: 30,
  playerLocation: { x: 0, y: 0 },
};

export default initialMap;
