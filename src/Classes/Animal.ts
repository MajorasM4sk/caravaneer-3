import { ItemData } from "./Item";

export class AnimalData {
  public id: string;
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
  public produces: ItemData[];
  public baseSpeed: number;
}

export class Animal extends AnimalData {
  public getMaxLoad = () => {};
  public getAge = () => {};
  public getMeat = () => {};
  public getSkin = () => {};
  public getSpeed = () => {};
}
