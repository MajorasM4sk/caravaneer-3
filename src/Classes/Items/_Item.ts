import { ContainerId } from "./Container";
import { MedicineId } from "./FirstAid";
import { FoodId } from "./Food";
import { LiquidId } from "./Liquid";
import { ResourceId } from "./Resource";

export type ItemId = FoodId | LiquidId | ContainerId | MedicineId | ResourceId;

export class ItemData {
  name: string;
  weightPerUnitKg: number;
  isInteger: boolean;
}

export interface SItem {
  toToolTip: () => string;
}
