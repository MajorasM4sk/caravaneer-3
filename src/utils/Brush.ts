export class Brush {
  private static STUFF_SIZE = 30;
  private static PLAYER_SIZE = 26;
  private static COMPASS_1 = 3;
  private static COMPASS_2 = 1.3;
  private static COMPASS_3 = 1.18;

  public static refreshCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.canvas.width = 1150;
    ctx.canvas.height = 769;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgb(209, 204, 182)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  public static drawTown = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.beginPath();
    let grd = ctx.createRadialGradient(x, y, Brush.STUFF_SIZE / 1.5, x, y, Brush.STUFF_SIZE);
    grd.addColorStop(0, "#cca");
    grd.addColorStop(1, "#eec");
    ctx.fillStyle = grd;
    ctx.arc(x, y, Brush.STUFF_SIZE, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "#999";
    ctx.arc(x, y, Brush.STUFF_SIZE / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  public static drawPlayer = (ctx: CanvasRenderingContext2D) => {
    let x = ctx.canvas.width / 2;
    let y = ctx.canvas.height / 2;

    //circle
    ctx.beginPath();
    ctx.strokeStyle = "#333";
    let grd = ctx.createRadialGradient(x, y, 15, x, y, Brush.PLAYER_SIZE);
    grd.addColorStop(0, "#997");
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
    ctx.moveTo(x, y - Brush.PLAYER_SIZE / 1.1);
    ctx.lineTo(x - Brush.PLAYER_SIZE / 2, y + Brush.PLAYER_SIZE / 1.4);
    ctx.lineTo(x, y + Brush.PLAYER_SIZE / 4);
    ctx.lineTo(x + Brush.PLAYER_SIZE / 2, y + Brush.PLAYER_SIZE / 1.4);
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
