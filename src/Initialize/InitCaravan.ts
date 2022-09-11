import { CaravanData } from "../Classes/Caravan";

const initialCaravan: CaravanData = {
  id: "0",
  people: [],
  animals: [],
  vehicules: [],
  cargo: [
    { itemId: "insects", qty: 2 },
    { itemId: "medicine", qty: 10 },
    { itemId: "forage", qty: 5 },
  ],
  containers: [{ container: { itemId: "glassBottle", qty: 2 }, liquid: { itemId: "water", qty: 2 } }],
  name: "",
  money: 1000,
  reputation: {
    friendly: 0,
    thrustworthy: 0,
    rational: 0,
    smart: 0,
    virtuous: 0,
    tough: 0,
    slaver: 0,
    lawbreaker: 0,
  },
  faction: "protagonist",
};

export default initialCaravan;
