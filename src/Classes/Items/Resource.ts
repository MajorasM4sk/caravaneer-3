import { ItemData } from "./_Item";

export type ResourceId = "forage";

export class ResourceData extends ItemData {
  public constructor(public id: ResourceId) {
    super();
  }
}

export class SMedicine {}

export const resources: ResourceData[] = [
  {
    id: "forage",
    name: "Forage",
    weightPerUnitKg: 1,
    isInteger: false,
  },
];
