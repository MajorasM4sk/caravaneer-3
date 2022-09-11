import { ItemData } from "./_Item";

export type MedicineId = "medicine";

export class MedicineData extends ItemData {
  public constructor(public id: MedicineId) {
    super();
  }
}

export class SMedicine {}

export const medicines: MedicineData[] = [
  {
    id: "medicine",
    name: "Medicine",
    weightPerUnitKg: 1 / 1000,
    isInteger: true,
  },
];
