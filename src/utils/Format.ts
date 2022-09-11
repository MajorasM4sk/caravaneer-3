export class ToStr {
  public static nb(n: number): string {
    return (Math.round((n + Number.EPSILON) * 100) / 100).toString();
  }
  public static date(d: Date): string {
    return d.toISOString().split("T")[0];
  }
}
