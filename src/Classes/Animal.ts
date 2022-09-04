import { Item } from "./Item";

export class Animal {
  public type: number;
  public name: number;
  public gender: number;
  public birth: number;
  public estPrice: number;
  public hpMax: number;
  public hp: number;
  public baseMaxLoad: number;
  public waterConsumption: number;
  public forageConsumption: number;
  public passengers: number[];
  public carts: number[];
  public maxNbPassengers: number;
  public maxNbAttachedCart: number;
  public weight: number;
  public idealWeight: number;
  public produces: Item[];
  public baseSpeed: number;

  public getMaxLoad = () => {};
  public getAge = () => {};
  public getMeat = () => {};
  public getSkin = () => {};
  public getSpeed = () => {};
}
