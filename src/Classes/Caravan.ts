import { Animal } from "./Animal";
import { Item } from "./Item";
import { Person } from "./Person";
import { Vehicule } from "./Vehicule";

export class Caravan {
  id: number;
  people: Person[] | number[]; //id et DAO? Central?
  animals: Animal[] | number[];
  cargo: Item[];
  name: string;
  money: number;
  reputation: {
    friendly: number;
    thrustworthy: number;
    rational: number;
    smart: number;
    virtuous: number;
    tough: number;
    slaver: number;
    lawbreaker: number;
  };
  faction: string; //à raffiner

  public isProtagonist = () => this.id === 0;
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
  public slaughterAnimal = (animal: Animal) => {};
  public renameAnimal = (animal: Animal) => {};
  public abandonAnimal = (animal: Animal) => {};
  public lubricateVehicule = (vehicule: Vehicule) => {};
  public abandonVehicule = (vehicule: Vehicule) => {};
  public getAverageMorale = () => {};
  public getFoodConsumption = () => {};
  public getWaterConsumption = () => {};
  public getMedicineConsumption = () => {};
  public getForageConsumption = () => {};
  public getFuelConsumption = () => {};
  public getElectricityConsumption = () => {};
  public getNoticeability = () => {};
}
