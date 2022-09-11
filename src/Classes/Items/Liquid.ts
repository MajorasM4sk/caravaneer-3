import { ItemData } from "./_Item";

export type LiquidId = "water" | "fuel" | "alcohol" | "petroleum" | "lubricant" | "donkeyMilk" | "goatMilk" | "sheepMilk" | "cowMilk" | "horseMilk" | "camelMilk" | "empty";

export class LiquidData extends ItemData {
  public constructor(public id: LiquidId) {
    super();
  }
}

export class SLiquid {}

export const liquids: LiquidData[] = [
  {
    id: "water",
    name: "Water",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "fuel",
    name: "Fuel",
    weightPerUnitKg: 0.8,
    isInteger: false,
  },
  {
    id: "alcohol",
    name: "Alcohol",
    weightPerUnitKg: 0.9,
    isInteger: false,
  },
  {
    id: "petroleum",
    name: "Petroleum",
    weightPerUnitKg: 0.9,
    isInteger: false,
  },
  {
    id: "lubricant",
    name: "Lubricant",
    weightPerUnitKg: 0.9,
    isInteger: false,
  },
  {
    id: "donkeyMilk",
    name: "Donkey milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "goatMilk",
    name: "Goat milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "sheepMilk",
    name: "Sheep milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "cowMilk",
    name: "Cow milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "horseMilk",
    name: "Horse milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
  {
    id: "camelMilk",
    name: "Camel milk",
    weightPerUnitKg: 1,
    isInteger: false,
  },
];
