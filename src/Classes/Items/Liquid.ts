import { ItemData } from "./_Item";

export class LiquidData extends ItemData {
  public constructor() {
    super();
  }
}

export class SLiquid {}

export const liquids: LiquidData[] = [
  {
    id: "water",
    name: "Water",
    weightPerUnit: 1,
    isInteger: false,
  },
];
