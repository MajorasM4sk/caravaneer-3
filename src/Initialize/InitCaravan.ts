import { CaravanData } from "../Classes/Caravan";

const initialCaravan: CaravanData = {
  id: "0",
  people: [],
  animals: [],
  vehicules: [],
  cargo: [],
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