import { Point } from "../Classes/Point";
import { Maths } from "./Maths";
import { Ratio } from "./Ratio";

export class Brush {
  private static COMPASS_1 = 3;
  private static COMPASS_2 = 1.3;
  private static COMPASS_3 = 1.18;
  private static BORDER_SMOOTHINESS = 0.2;
  private static BORDER_STEPS = 0.1;

  public static refreshCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgb(209, 204, 182)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  public static drawTown = (ctx: CanvasRenderingContext2D, p: Point, name: string) => {
    let x = p.x;
    let y = p.y;
    ctx.beginPath();
    let grd = ctx.createRadialGradient(x, y, Ratio.getTownSize() / 1.5, x, y, Ratio.getTownSize());
    grd.addColorStop(0, "#cca");
    grd.addColorStop(1, "#eec");
    ctx.fillStyle = grd;
    ctx.arc(x, y, Ratio.getTownSize(), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    let grd2 = ctx.createRadialGradient(x, y, Ratio.getTownSize() / 4, x, y, Ratio.getTownSize() / 2);
    grd2.addColorStop(0, "rgba(136, 136, 136, 0.4)");
    grd2.addColorStop(1, "#888");
    ctx.fillStyle = grd2;
    ctx.arc(x, y, Ratio.getTownSize() / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillStyle = "rgb(38,38,38)";
    ctx.font = Ratio.getFontSize().toString() + "px Arial, Helvetica, sans-serif";
    ctx.fillText(name, x, y + Ratio.getTownSize() + Ratio.getFontSize());
  };

  public static drawPlayer = (ctx: CanvasRenderingContext2D, radians: number) => {
    let x = ctx.canvas.width / 2;
    let y = ctx.canvas.height / 2;

    //circle
    ctx.beginPath();
    ctx.strokeStyle = "#333";
    let grd = ctx.createRadialGradient(x, y, Ratio.getPlayerSize() / 5, x, y, Ratio.getPlayerSize());
    grd.addColorStop(0, "rgba(153, 153, 119, 0.9)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.arc(x, y, Ratio.getPlayerSize(), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //compass lines below

    ctx.beginPath();
    ctx.moveTo(x - Ratio.getPlayerSize(), y);
    ctx.lineTo(x - Ratio.getPlayerSize() + Ratio.getPlayerSize() / this.COMPASS_1, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Ratio.getPlayerSize(), y);
    ctx.lineTo(x + Ratio.getPlayerSize() - Ratio.getPlayerSize() / this.COMPASS_1, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + Ratio.getPlayerSize());
    ctx.lineTo(x, y + Ratio.getPlayerSize() - Ratio.getPlayerSize() / this.COMPASS_1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y - Ratio.getPlayerSize());
    ctx.lineTo(x, y - Ratio.getPlayerSize() + Ratio.getPlayerSize() / this.COMPASS_1);
    ctx.stroke();

    ctx.strokeStyle = "#666";

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 4) * Ratio.getPlayerSize(), y + Math.cos(Math.PI / 4) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2, y + (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 4) * Ratio.getPlayerSize(), y + Math.cos(Math.PI / 4) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2, y + (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 4) * Ratio.getPlayerSize(), y - Math.cos(Math.PI / 4) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2, y - (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 4) * Ratio.getPlayerSize(), y - Math.cos(Math.PI / 4) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2, y - (Math.cos(Math.PI / 4) * Ratio.getPlayerSize()) / this.COMPASS_2);
    ctx.stroke();

    ctx.strokeStyle = "#777";

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 8) * Ratio.getPlayerSize(), y - Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3, y - (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 8) * Ratio.getPlayerSize(), y + Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3, y + (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize(), y + Math.cos(Math.PI / 8) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3, y + (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize(), y + Math.cos(Math.PI / 8) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3, y + (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize(), y - Math.cos(Math.PI / 8) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3, y - (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize(), y - Math.cos(Math.PI / 8) * Ratio.getPlayerSize());
    ctx.lineTo(x + (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3, y - (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 8) * Ratio.getPlayerSize(), y - Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3, y - (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 8) * Ratio.getPlayerSize(), y + Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize());
    ctx.lineTo(x - (Math.cos(Math.PI / 8) * Ratio.getPlayerSize()) / this.COMPASS_3, y + (Math.cos((Math.PI / 8) * 5) * Ratio.getPlayerSize()) / this.COMPASS_3);
    ctx.stroke();

    //cursor
    ctx.fillStyle = "rgba(60, 50, 50, 0.7)";
    ctx.beginPath();
    let p1 = Maths.rotate({ x: x, y: y - Ratio.getPlayerSize() / 1.1 }, { x: x, y: y }, radians);
    let p2 = Maths.rotate({ x: x - Ratio.getPlayerSize() / 2, y: y + Ratio.getPlayerSize() / 1.4 }, { x: x, y: y }, radians);
    let p3 = Maths.rotate({ x: x, y: y + Ratio.getPlayerSize() / 4 }, { x: x, y: y }, radians);
    let p4 = Maths.rotate({ x: x + Ratio.getPlayerSize() / 2, y: y + Ratio.getPlayerSize() / 1.4 }, { x: x, y: y }, radians);
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.closePath();
    ctx.fill();
  };

  private static easeInOut = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  public static drawDirtyScreen = (ctx: CanvasRenderingContext2D) => {
    let grd = ctx.createLinearGradient(0, 0, Ratio.getBorderSize(), 0);
    for (let i = 0.2; i <= 1.2; i += Brush.BORDER_STEPS) {
      grd.addColorStop(i - 0.2, "rgba(122, 114, 85, " + (1 - Brush.easeInOut(i)) + ")");
    }
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, Ratio.getBorderSize(), ctx.canvas.height);
    ctx.stroke();

    let grd2 = ctx.createLinearGradient(0, 0, 0, Ratio.getBorderSize());
    for (let i = Brush.BORDER_SMOOTHINESS; i <= 1 + Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd2.addColorStop(i - Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + (1 - Brush.easeInOut(i)) + ")");
    }
    ctx.fillStyle = grd2;
    ctx.fillRect(0, 0, ctx.canvas.width, Ratio.getBorderSize());

    let grd3 = ctx.createLinearGradient(0, ctx.canvas.height - Ratio.getBorderSize(), 0, ctx.canvas.height);
    for (let i = -Brush.BORDER_SMOOTHINESS; i <= 1 - Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd3.addColorStop(i + Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + Brush.easeInOut(i) + ")");
    }
    ctx.fillStyle = grd3;
    ctx.fillRect(0, ctx.canvas.height - Ratio.getBorderSize(), ctx.canvas.width, Ratio.getBorderSize());

    let grd4 = ctx.createLinearGradient(ctx.canvas.width - Ratio.getBorderSize(), 0, ctx.canvas.width, 0);
    for (let i = -Brush.BORDER_SMOOTHINESS; i <= 1 - Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd4.addColorStop(i + Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + Brush.easeInOut(i) + ")");
    }
    ctx.fillStyle = grd4;
    ctx.fillRect(ctx.canvas.width - Ratio.getBorderSize(), 0, Ratio.getBorderSize(), ctx.canvas.height);
  };
}
