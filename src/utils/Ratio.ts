import { Point } from "../Classes/Point";
import { Maths } from "./Maths";

export class Ratio {
  //1km = 6.0348px
  public static kmToPx = 6.0516;
  public static getSpeedRatioFor(kmph: number) {
    return kmph / 5.5;
  }
  public static getKmFromPx(px: number) {
    return px / 6.0516;
  }

  private static BASE_TOWN_SIZE = 34;
  private static TOWN_SIZE = Ratio.BASE_TOWN_SIZE;

  private static BASE_PLAYER_SIZE = 24;
  private static PLAYER_SIZE = Ratio.BASE_PLAYER_SIZE;

  private static BASE_FONT_SIZE = 20;
  private static FONT_SIZE = Ratio.BASE_FONT_SIZE;

  private static windowRatio = 1;

  private static BASE_BORDER_SIZE = 60;
  private static BORDER_SIZE = Ratio.BASE_BORDER_SIZE;

  public static updateRatio = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight;
    let ratio = window.innerHeight / 769;
    Ratio.setWindowRatio(ratio);
    canvas.getContext("2d").lineWidth = ratio;
  };

  public static setWindowRatio = (ratio: number) => {
    Ratio.TOWN_SIZE = Ratio.BASE_TOWN_SIZE * ratio;
    Ratio.PLAYER_SIZE = Ratio.BASE_PLAYER_SIZE * ratio;
    Ratio.FONT_SIZE = Ratio.BASE_FONT_SIZE * ratio;
    Ratio.BORDER_SIZE = Ratio.BASE_BORDER_SIZE * ratio;
    Ratio.windowRatio = ratio;
  };

  public static getPlayerSize() {
    return Ratio.PLAYER_SIZE;
  }

  public static getTownSize() {
    return Ratio.TOWN_SIZE;
  }

  public static getWIndowRatio = () => {
    return this.windowRatio;
  };

  public static getFontSize = () => {
    return this.FONT_SIZE;
  };

  public static getBorderSize = () => {
    return this.BORDER_SIZE;
  };

  public static getPixelLocation(canvas: HTMLCanvasElement, p: Point): Point {
    return { x: p.x * Ratio.windowRatio + canvas.width / 2, y: p.y * Ratio.windowRatio + canvas.height / 2 };
  }

  public static distance = (canvas: HTMLCanvasElement, p1: Point, p2: Point): number => {
    let pr1 = Ratio.getPixelLocation(canvas, p1);
    let pr2 = Ratio.getPixelLocation(canvas, p2);
    return Maths.distance(pr1, pr2);
  };

  public static playerTownCollision = (canvas: HTMLCanvasElement, player: Point, town: Point, callback?: () => void): boolean => {
    let dist = Ratio.distance(canvas, player, town);
    if (dist < Ratio.PLAYER_SIZE + Ratio.TOWN_SIZE / 2) {
      if (callback) callback();
      return true;
    }
  };
}
