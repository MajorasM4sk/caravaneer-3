export class DB {
  public static get(item: string) {
    return JSON.parse(localStorage.getItem(item));
  }
}
