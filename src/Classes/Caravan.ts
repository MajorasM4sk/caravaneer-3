import { Animal, AnimalData } from "./Animal";
import { ItemData } from "./Item";
import { PersonData } from "./Person";
import { VehiculeData } from "./Vehicule";

export class CaravanData {
  id: string;
  people: PersonData[];
  animals?: Animal[];
  vehicules: VehiculeData[];
  cargo?: ItemData[];
  name?: string;
  money: number;
  reputation?: {
    friendly: number;
    thrustworthy: number;
    rational: number;
    smart: number;
    virtuous: number;
    tough: number;
    slaver: number;
    lawbreaker: number;
  };
  faction: string;
}

export class Caravan extends CaravanData {
  public isProtagonist = () => this.id === "0";
  public getMaxLoad = () => {};
  public getCurrentLoad = () => {};
  public getMaxLiquid = () => {};
  public getSpeed = () => {};
  public getNbPeople = () => {};
  public payMercenaries = () => {};
  public hasWoundedPeople = () => {};
  public hasWoundedAnimal = () => {};
  public hasMechanicalProblem = () => {};
  public hasOtherProblem = () => {};
  public electricityProduction = () => {};
  public electricityConsommation = () => {};
  public slaughterAnimal = (animal: AnimalData) => {};
  public renameAnimal = (animal: AnimalData) => {};
  public abandonAnimal = (animal: AnimalData) => {};
  public lubricateVehicule = (vehicule: VehiculeData) => {};
  public abandonVehicule = (vehicule: VehiculeData) => {};
  public getAverageMorale = () => {};
  public getFoodConsumption = () => {};
  public getWaterConsumption = () => {};
  public getMedicineConsumption = () => {};
  public getForageConsumption = () => {};
  public getFuelConsumption = () => {};
  public getElectricityConsumption = () => {};
  public getNoticeability = () => {};
}
