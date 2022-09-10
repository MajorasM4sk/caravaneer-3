import { ItemData } from "./_Item";

export class ContainerData extends ItemData {
  public constructor(public capacityL: number) {
    super();
  }
}

export class SContainer {}

export const containers: ContainerData[] = [
  {
    id: "bottle",
    name: "bottle",
    weightPerUnit: 1,
    isInteger: false,
    capacityL: 1,
  },
];
