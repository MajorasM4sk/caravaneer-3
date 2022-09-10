import { ItemData } from "./_Item";

export class FoodData extends ItemData {
  // 1 energy = 10kcal. 121 energy = 1210kcal
  public constructor(public energy: number, public waterPct: number, public taste: number) {
    super();
  }
}

export class SFood {}

export const foods: FoodData[] = [
  {
    id: "insects",
    name: "Insects",
    weightPerUnit: 1,
    isInteger: false,
    energy: 121,
    waterPct: 40,
    taste: -3,
  },
];
