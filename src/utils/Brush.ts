import { Maths } from "./Maths";

export class Brush {
  public static STUFF_SIZE = 34;
  public static PLAYER_SIZE = 24;
  private static COMPASS_1 = 3;
  private static COMPASS_2 = 1.3;
  private static COMPASS_3 = 1.18;

  public static refreshCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgb(209, 204, 182)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  public static drawTown = (ctx: CanvasRenderingContext2D, x: number, y: number, name: string) => {
    ctx.beginPath();
    let grd = ctx.createRadialGradient(x, y, Brush.STUFF_SIZE / 1.5, x, y, Brush.STUFF_SIZE);
    grd.addColorStop(0, "#cca");
    grd.addColorStop(1, "#eec");
    ctx.fillStyle = grd;
    ctx.arc(x, y, Brush.STUFF_SIZE, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    let grd2 = ctx.createRadialGradient(x, y, Brush.STUFF_SIZE / 4, x, y, Brush.STUFF_SIZE / 2);
    grd2.addColorStop(0, "rgba(136, 136, 136, 0.4)");
    grd2.addColorStop(1, "#888");
    ctx.fillStyle = grd2;
    ctx.arc(x, y, Brush.STUFF_SIZE / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillStyle = "rgb(38,38,38)";
    ctx.font = "20px Arial, Helvetica, sans-serif";
    ctx.fillText(name, x, y + Brush.STUFF_SIZE + 20, 400);
  };

  public static drawPlayer = (ctx: CanvasRenderingContext2D, radians: number) => {
    let x = ctx.canvas.width / 2;
    let y = ctx.canvas.height / 2;

    //circle
    ctx.beginPath();
    ctx.strokeStyle = "#333";
    let grd = ctx.createRadialGradient(x, y, 5, x, y, Brush.PLAYER_SIZE);
    grd.addColorStop(0, "rgba(153, 153, 119, 0.9)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.arc(x, y, Brush.PLAYER_SIZE, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //compass lines below

    ctx.beginPath();
    ctx.moveTo(x - Brush.PLAYER_SIZE, y);
    ctx.lineTo(x - Brush.PLAYER_SIZE + Brush.PLAYER_SIZE / this.COMPASS_1, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Brush.PLAYER_SIZE, y);
    ctx.lineTo(x + Brush.PLAYER_SIZE - Brush.PLAYER_SIZE / this.COMPASS_1, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + Brush.PLAYER_SIZE);
    ctx.lineTo(x, y + Brush.PLAYER_SIZE - Brush.PLAYER_SIZE / this.COMPASS_1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y - Brush.PLAYER_SIZE);
    ctx.lineTo(x, y - Brush.PLAYER_SIZE + Brush.PLAYER_SIZE / this.COMPASS_1);
    ctx.stroke();

    ctx.strokeStyle = "#666";

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE, y + Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2, y + (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE, y + Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2, y + (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE, y - Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2, y - (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE, y - Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2, y - (Math.cos(Math.PI / 4) * Brush.PLAYER_SIZE) / this.COMPASS_2);
    ctx.stroke();

    ctx.strokeStyle = "#777";

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE, y - Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3, y - (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE, y + Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3, y + (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE, y + Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3, y + (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE, y + Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3, y + (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE, y - Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3, y - (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE, y - Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE);
    ctx.lineTo(x + (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3, y - (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE, y - Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3, y - (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE, y + Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE);
    ctx.lineTo(x - (Math.cos(Math.PI / 8) * Brush.PLAYER_SIZE) / this.COMPASS_3, y + (Math.cos((Math.PI / 8) * 5) * Brush.PLAYER_SIZE) / this.COMPASS_3);
    ctx.stroke();

    //cursor
    ctx.fillStyle = "rgba(60, 50, 50, 0.7)";
    ctx.beginPath();
    let p1 = Maths.rotate({ x: x, y: y - Brush.PLAYER_SIZE / 1.1 }, { x: x, y: y }, radians);
    let p2 = Maths.rotate({ x: x - Brush.PLAYER_SIZE / 2, y: y + Brush.PLAYER_SIZE / 1.4 }, { x: x, y: y }, radians);
    let p3 = Maths.rotate({ x: x, y: y + Brush.PLAYER_SIZE / 4 }, { x: x, y: y }, radians);
    let p4 = Maths.rotate({ x: x + Brush.PLAYER_SIZE / 2, y: y + Brush.PLAYER_SIZE / 1.4 }, { x: x, y: y }, radians);
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p4.x, p4.y);
    ctx.closePath();
    ctx.fill();
  };

  private static BORDER_SIZE = 60;
  private static BORDER_SMOOTHINESS = 0.2;
  private static BORDER_STEPS = 0.1;

  private static easeInOut = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  public static drawDirtyScreen = (ctx: CanvasRenderingContext2D) => {
    let grd = ctx.createLinearGradient(0, 0, Brush.BORDER_SIZE, 0);
    for (let i = 0.2; i <= 1.2; i += Brush.BORDER_STEPS) {
      grd.addColorStop(i - 0.2, "rgba(122, 114, 85, " + (1 - Brush.easeInOut(i)) + ")");
    }
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, Brush.BORDER_SIZE, ctx.canvas.height);
    ctx.stroke();

    let grd2 = ctx.createLinearGradient(0, 0, 0, Brush.BORDER_SIZE);
    for (let i = Brush.BORDER_SMOOTHINESS; i <= 1 + Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd2.addColorStop(i - Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + (1 - Brush.easeInOut(i)) + ")");
    }
    ctx.fillStyle = grd2;
    ctx.fillRect(0, 0, ctx.canvas.width, Brush.BORDER_SIZE);

    let grd3 = ctx.createLinearGradient(0, ctx.canvas.height - Brush.BORDER_SIZE, 0, ctx.canvas.height);
    for (let i = -Brush.BORDER_SMOOTHINESS; i <= 1 - Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd3.addColorStop(i + Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + Brush.easeInOut(i) + ")");
    }
    ctx.fillStyle = grd3;
    ctx.fillRect(0, ctx.canvas.height - Brush.BORDER_SIZE, ctx.canvas.width, Brush.BORDER_SIZE);

    let grd4 = ctx.createLinearGradient(ctx.canvas.width - Brush.BORDER_SIZE, 0, ctx.canvas.width, 0);
    for (let i = -Brush.BORDER_SMOOTHINESS; i <= 1 - Brush.BORDER_SMOOTHINESS; i += Brush.BORDER_STEPS) {
      grd4.addColorStop(i + Brush.BORDER_SMOOTHINESS, "rgba(122, 114, 85, " + Brush.easeInOut(i) + ")");
    }
    ctx.fillStyle = grd4;
    ctx.fillRect(ctx.canvas.width - Brush.BORDER_SIZE, 0, Brush.BORDER_SIZE, ctx.canvas.height);
  };
}
