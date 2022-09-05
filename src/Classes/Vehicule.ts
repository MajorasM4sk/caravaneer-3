export class VehiculeData {
  public id: string;
  public type: string;
  public estPrice: number;
  public hpMax: number;
  public hp: number;
  public maxLoad: number;
  public passengers: number[];
  public attachedTo: number[];
  public maxNbAttachedTo: number;
  public maxnbPassengers: number;
  public weight: number;
  public carryingMultiplier: number;
  public damageResistance: number;
  public fireResistance: number;
  public explosionResistance: number;
  public lubricantMax: number;
  public lubricant: number;
}

export class SVehicule {
  public static getMaxLoad = () => {};
  public static isBroken = () => {};
}
