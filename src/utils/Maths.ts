import { Point } from "../Classes/Point";

export class Maths {
  public static rotate(that: Point, aroundThat: Point, radians: number): Point {
    let cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = cos * (that.x - aroundThat.x) + sin * (that.y - aroundThat.y) + aroundThat.x,
      ny = cos * (that.y - aroundThat.y) - sin * (that.x - aroundThat.x) + aroundThat.y;
    return { x: nx, y: ny };
  }

  public static distance(p1: Point, p2: Point) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }
}
