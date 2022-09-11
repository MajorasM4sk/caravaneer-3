import { PersonStat } from "../Classes/Person";
import { Normals } from "../utils/Normals";
import initialCaravan from "./InitCaravan";
import initialCities from "./InitCities";
import initialMap from "./InitMap";

export class Initializer {
  public static initGame = (name: string, physical: number, agility: number, accuracy: number, intelligence: number) => {
    Initializer.initMap();
    Initializer.initEnemies();
    Initializer.initTowns();
    Initializer.initCaravan(name, physical, agility, accuracy, intelligence);
  };

  private static initMap = () => {
    localStorage.setItem("map", JSON.stringify(initialMap));
  };
  private static initEnemies = () => {};
  private static initTowns = () => {
    localStorage.setItem("cities", JSON.stringify(initialCities));
  };
  private static initCaravan = (name: string, physical: number, agility: number, accuracy: number, intelligence: number) => {
    let caravan = initialCaravan;
    let weight = Normals.getIdealWeight(physical as PersonStat, "man");
    caravan.people.push({
      id: "0",
      group: "volunteer",
      gender: "man",
      name: name,
      physical: physical as PersonStat,
      agility: agility as PersonStat,
      accuracy: accuracy as PersonStat,
      intelligence: intelligence as PersonStat,
      combatExperience: 1,
      travellingExperience: 1,
      doctor: 1,
      vetenary: 1,
      mechanic: 1,
      hunting: 1,
      collecting: 1,
      firstAid: 1,
      smuggling: 1,
      rangedWeapons: 1,
      closeCombat: 1,
      unarmed: 1,
      throwing: 1,
      crossbows: 1,
      pistols: 1,
      rifles: 1,
      machineGuns: 1,
      SMGs: 1,
      shotguns: 1,
      rocketLaunchers: 1,
      flamethrowers: 1,
      knives: 1,
      clubs: 1,
      choppingMelee: 1,
      swords: 1,
      dodge: 1,
      hpMax: 1,
      hp: 1,
      foodMorale: 1,
      waterMorale: 1,
      victoryMorale: 1,
      freedomMorale: 1,
      salaryMorale: 1,
      faction: "protagonist",
      equipment: {},
      distanceTravelled: 0,
      damageTaken: 0,
      hasDamagedEye: false,
      hasDamagedLeg: false,
      hasDamagedArm: false,
      sight: 1,
      weight: weight,
      idealWeight: weight,
    });
    localStorage.setItem("caravan", JSON.stringify(caravan));
  };
}
