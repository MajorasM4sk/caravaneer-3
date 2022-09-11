import { ItemData } from "./_Item";

export type ContainerId =
  | "glassBottle"
  | "smallMetalJerrycan"
  | "mediumMetalJerrycan"
  | "largeMetalJerrycan"
  | "metalBarrel"
  | "smallPlasticJerrycan"
  | "mediumPlasticJerrycan"
  | "largePlasticJerrycan"
  | "plasticBarrel";

export class ContainerData extends ItemData {
  public constructor(public id: ContainerId, public capacityL: number) {
    super();
  }
}

export class SContainer {}

export const containers: ContainerData[] = [
  {
    id: "glassBottle",
    name: "Glass bottle",
    capacityL: 1,
    weightPerUnitKg: 0.35,
    isInteger: true,
  },
  {
    id: "smallMetalJerrycan",
    name: "Small metal jerrycan",
    capacityL: 5,
    weightPerUnitKg: 1.5,
    isInteger: true,
  },
  {
    id: "mediumMetalJerrycan",
    name: "bottle",
    capacityL: 10,
    weightPerUnitKg: 2.5,
    isInteger: true,
  },
  {
    id: "largeMetalJerrycan",
    name: "bottle",
    capacityL: 20,
    weightPerUnitKg: 4.5,
    isInteger: true,
  },
  {
    id: "metalBarrel",
    name: "bottle",
    capacityL: 208,
    weightPerUnitKg: 21,
    isInteger: true,
  },
  {
    id: "smallPlasticJerrycan",
    name: "bottle",
    capacityL: 5,
    weightPerUnitKg: 0.4,
    isInteger: true,
  },
  {
    id: "mediumPlasticJerrycan",
    name: "bottle",
    capacityL: 10,
    weightPerUnitKg: 0.6,
    isInteger: true,
  },
  {
    id: "largePlasticJerrycan",
    name: "bottle",
    capacityL: 20,
    weightPerUnitKg: 1,
    isInteger: true,
  },
  {
    id: "plasticBarrel",
    name: "bottle",
    capacityL: 208,
    weightPerUnitKg: 8,
    isInteger: true,
  },
];
