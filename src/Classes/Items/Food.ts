import { ItemData } from "./_Item";

export type FoodId =
  | "beans"
  | "beef"
  | "camelMeat"
  | "camelMilk"
  | "carrots"
  | "cowCheese"
  | "cowMilk"
  | "donkeyMeat"
  | "donkeyMilk"
  | "goatCheese"
  | "goatMeat"
  | "goatMilk"
  | "horseMeat"
  | "horseMilk"
  | "humanMeat"
  | "insects"
  | "jerboaMeat"
  | "lamb"
  | "lizardEgg"
  | "lizardMeat"
  | "mushrooms"
  | "peas"
  | "potatoes"
  | "sheepCheese"
  | "sheepMilk"
  | "snakeEgg"
  | "snakeMeat";

export class FoodData extends ItemData {
  // 1 energyPerKg = 10kcal. 121 energyPerKg = 1210kcal
  public constructor(public id: FoodId, public energyPerKg: number, public waterPct: number, public taste: number) {
    super();
  }
}

export class SFood {}

export const foods: FoodData[] = [
  { id: "beans", name: "Beans", weightPerUnitKg: 1, isInteger: false, energyPerKg: 31, waterPct: 0.3, taste: 1 },
  { id: "beef", name: "Beef", weightPerUnitKg: 1, isInteger: false, energyPerKg: 174, waterPct: 0.4, taste: 7 },
  { id: "camelMeat", name: "Camel Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 98, waterPct: 0.45, taste: 1 },
  { id: "camelMilk", name: "Camel Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 60, waterPct: 0.9, taste: 0 },
  { id: "carrots", name: "Carrots", weightPerUnitKg: 1, isInteger: false, energyPerKg: 52, waterPct: 0.7, taste: 0 },
  { id: "cowCheese", name: "Cow Cheese", weightPerUnitKg: 1, isInteger: false, energyPerKg: 356, waterPct: 0.2, taste: 9 },
  { id: "cowMilk", name: "Cow Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 66, waterPct: 0.89, taste: 2 },
  { id: "donkeyMeat", name: "Donkey Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 195, waterPct: 0.4, taste: 0 },
  { id: "donkeyMilk", name: "Donkey Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 44, waterPct: 0.89, taste: 111 },
  { id: "goatCheese", name: "Goat Cheese", weightPerUnitKg: 1, isInteger: false, energyPerKg: 364, waterPct: 0.45, taste: 9 },
  { id: "goatMeat", name: "Goat Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 195, waterPct: 0.4, taste: 5 },
  { id: "goatMilk", name: "Goat Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 60, waterPct: 0.89, taste: 3 },
  { id: "horseMeat", name: "Horse Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 133, waterPct: 0.4, taste: 2 },
  { id: "horseMilk", name: "Horse Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 44, waterPct: 0.9, taste: 1 },
  { id: "humanMeat", name: "Human Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 180, waterPct: 0.4, taste: -1 },
  { id: "insects", name: "Insects", weightPerUnitKg: 1, isInteger: false, energyPerKg: 121, waterPct: 0.4, taste: -3 },
  { id: "jerboaMeat", name: "Jerboa Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 165, waterPct: 0.4, taste: -1 },
  { id: "lamb", name: "Lamb", weightPerUnitKg: 1, isInteger: false, energyPerKg: 183, waterPct: 0.4, taste: 6 },
  { id: "lizardEgg", name: "Lizard Egg", weightPerUnitKg: 1 / 100, isInteger: true, energyPerKg: 140, waterPct: 0.4, taste: 5 },
  { id: "lizardMeat", name: "Lizard Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 95, waterPct: 0.4, taste: 2 },
  { id: "mushrooms", name: "Mushrooms", weightPerUnitKg: 1, isInteger: false, energyPerKg: 22, waterPct: 0.5, taste: 4 },
  { id: "peas", name: "Peas", weightPerUnitKg: 1, isInteger: false, energyPerKg: 81, waterPct: 0.8, taste: 2 },
  { id: "potatoes", name: "Potatoes", weightPerUnitKg: 1, isInteger: false, energyPerKg: 77, waterPct: 0.4, taste: 0 },
  { id: "sheepCheese", name: "Sheep Cheese", weightPerUnitKg: 1, isInteger: false, energyPerKg: 320, waterPct: 0.35, taste: 10 },
  { id: "sheepMilk", name: "Sheep Milk", weightPerUnitKg: 1, isInteger: false, energyPerKg: 95, waterPct: 0.89, taste: 1 },
  { id: "snakeEgg", name: "Snake Egg", weightPerUnitKg: 0.022, isInteger: true, energyPerKg: 141, waterPct: 0.3, taste: 6 },
  { id: "snakeMeat", name: "Snake Meat", weightPerUnitKg: 1, isInteger: false, energyPerKg: 93, waterPct: 0.4, taste: 2 },
];
