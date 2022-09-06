import { Animal, AnimalData } from "./Animal";
import { ItemData } from "./Item";
import { PersonData, SPerson } from "./Person";
import { VehiculeData } from "./Vehicule";

export class CaravanData {
  id: string;
  people: PersonData[];
  animals?: Animal[];
  vehicules: VehiculeData[];
  cargo?: ItemData[];
  name?: string;
  money: number;
  reputation?: {
    friendly: number;
    thrustworthy: number;
    rational: number;
    smart: number;
    virtuous: number;
    tough: number;
    slaver: number;
    lawbreaker: number;
  };
  faction: string;
}

export class SCaravan extends CaravanData {
  public static isProtagonist = (c: CaravanData) => c.id === "0";
  public static getMaxLoad = (c: CaravanData) => {};
  public static getCurrentLoad = (c: CaravanData) => {};
  public static getMaxLiquid = (c: CaravanData) => {};
  public static getSpeedKmph = (c: CaravanData): number => {
    let record = Infinity;
    for (let p of c.people) {
      let speed = SPerson.getSpeedKmph(p);
      if (speed < record) record = speed;
    }
    return record;
  };
  public static getNbPeople = (c: CaravanData) => {};
  public static payMercenaries = (c: CaravanData) => {};
  public static hasWoundedPeople = (c: CaravanData) => {};
  public static hasWoundedAnimal = (c: CaravanData) => {};
  public static hasMechanicalProblem = (c: CaravanData) => {};
  public static hasOtherProblem = (c: CaravanData) => {};
  public static electricityProduction = (c: CaravanData) => {};
  public static electricityConsommation = (c: CaravanData) => {};
  public static slaughterAnimal = (c: CaravanData, animal: AnimalData) => {};
  public static renameAnimal = (c: CaravanData, animal: AnimalData) => {};
  public static abandonAnimal = (c: CaravanData, animal: AnimalData) => {};
  public static lubricateVehicule = (c: CaravanData, vehicule: VehiculeData) => {};
  public static abandonVehicule = (c: CaravanData, vehicule: VehiculeData) => {};
  public static getAverageMorale = (c: CaravanData) => {};
  public static getFoodConsumption = (c: CaravanData) => {};
  public static getWaterConsumption = (c: CaravanData) => {};
  public static getMedicineConsumption = (c: CaravanData) => {};
  public static getForageConsumption = (c: CaravanData) => {};
  public static getFuelConsumption = (c: CaravanData) => {};
  public static getElectricityConsumption = (c: CaravanData) => {};
  public static getNoticeability = (c: CaravanData) => {};
}
