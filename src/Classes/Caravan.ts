import { Animal, AnimalData } from "./Animal";
import { containers } from "./Items/Container";
import { foods } from "./Items/Food";
import { ItemId } from "./Items/_Item";
import { PersonData, SPerson } from "./Person";
import { VehiculeData } from "./Vehicule";

export type Quantity = { itemId: ItemId; qty: number };

export class CaravanData {
  id: string;
  people: PersonData[];
  animals?: Animal[];
  vehicules: VehiculeData[];
  cargo: Quantity[];
  containers: { container: Quantity; liquid: Quantity }[];
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
  public static getCaloryConsumption = (c: CaravanData) => {
    let sum = 0;
    for (let person of c.people) {
      sum += SPerson.getCaloryConsumptionPerDay(person, true);
    }
    return sum;
  };
  public static getWaterConsumptionForPeople = (c: CaravanData) => {
    let sum = 0;
    for (let person of c.people) {
      sum += SPerson.getWaterConsumptionPerDay(person, true);
    }
    return sum;
  };
  public static getMedicineConsumption = (c: CaravanData) => {};
  public static getForageConsumption = (c: CaravanData) => {};
  public static getFuelConsumption = (c: CaravanData) => {};
  public static getElectricityConsumption = (c: CaravanData) => {};
  public static getNoticeability = (c: CaravanData) => {};
  public static getItemQty = (c: CaravanData, itemId: ItemId) => {
    let item = c.cargo.find((i) => i.itemId === itemId);
    if (item) return item.qty;
    else return 0;
  };
  public static getLiquidQty = (c: CaravanData, liquid: ItemId): number => {
    let sum = 0;
    for (let container of c.containers) {
      if (container.liquid.itemId === liquid) {
        sum += container.liquid.qty;
      }
    }
    return sum;
  };
  public static getLiquidRemainingSpace = (c: CaravanData, liquid: ItemId): number => {
    let sum = 0;
    for (let container of c.containers) {
      let containerData = containers.find((c) => c.id === liquid);
      if (container.liquid.itemId === liquid) {
        sum += containerData.capacityL - container.liquid.qty;
      }
    }
    return sum;
  };
  public static getFoodQty = (c: CaravanData): number => {
    let sum = 0;
    for (let item of c.cargo) {
      let food = foods.find((f) => f.id === item.itemId);
      if (food) {
        sum += food.energyPerKg * item.qty * 10;
      }
    }
    return sum;
  };
  public static eat = (c: CaravanData, calories: number): number => {
    //todo : distribute through all food types
    let waterAbsorbed = 0;
    let i = c.cargo.length;
    while (i--) {
      let item = c.cargo[i];
      let food = foods.find((f) => f.id === item.itemId);
      if (food) {
        let kcal = (item.qty * (food.energyPerKg * 10)) / food.weightPerUnitKg;
        let newKcal = kcal - calories;
        let newQty = newKcal / ((food.energyPerKg * 10) / food.weightPerUnitKg);
        waterAbsorbed += (item.qty - newQty) * food.weightPerUnitKg * food.waterPct;
        item.qty = newQty;
        if (item.qty < 0) {
          //out of stock
          c.cargo.splice(i, 1);
        }
      }
    }
    return waterAbsorbed;
  };
  //returns amount left to drink, or 0 if had enough water
  public static drink = (c: CaravanData, liters: number): number => {
    let leftToDrink = liters;
    if (liters > 0) {
      for (let container of c.containers) {
        if (container.liquid.itemId === "water") {
          if (leftToDrink > container.liquid.qty) {
            leftToDrink -= container.liquid.qty;
            container.liquid.qty = 0;
            container.liquid.itemId = "empty";
          } else {
            container.liquid.qty -= leftToDrink;
            leftToDrink = 0;
            break;
          }
        }
      }
    } else {
      return 0;
    }
    return leftToDrink;
  };
  public static getMedicineQty = (c: CaravanData): number => {
    return SCaravan.getItemQty(c, "medicine");
  };
  public static getForageQty = (c: CaravanData): number => {
    return SCaravan.getItemQty(c, "forage");
  };

  public static updateCaravan = (c: CaravanData, hours: number) => {
    //apply damage/heal to people, animals, vehicules, carts
    //update water, food, medicine, forage, money (mercenaries), etc.
    //TODO separate people and animal's water consumption
    //TODO settings to balance food consummed

    let dayRatio = hours / 24;
    let caloriesConsumed = SCaravan.getCaloryConsumption(c) * dayRatio;
    let waterAbsorbed = SCaravan.eat(c, caloriesConsumed);

    let waterToDrink = SCaravan.getWaterConsumptionForPeople(c) * dayRatio - waterAbsorbed;
    if (waterToDrink > 0) {
      let leftToDrink = SCaravan.drink(c, waterToDrink);
    }
    // if (leftToDrink > 0) damagePeople(); damageAnimals();
  };
}
