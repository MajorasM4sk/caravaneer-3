export type ItemId = string;

export class ItemData {
  id: ItemId;
  name: string;
  weightPerUnit: number;
  isInteger: boolean;
}

export interface SItem {
  toToolTip: () => string;
}
