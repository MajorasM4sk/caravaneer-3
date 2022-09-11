import { Gender, PersonStat } from "../Classes/Person";

export type NormalStat = {
  woman: {
    10: number;
    9: number;
    8: number;
    7: number;
    6: number;
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  man: {
    10: number;
    9: number;
    8: number;
    7: number;
    6: number;
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
};

export class Normals {
  public static weights: NormalStat = {
    woman: {
      10: 75.7, //6' 4''
      9: 71.6, //6' 2''
      8: 67.6, //6' 0''
      7: 63.5, //5' 10''
      6: 59.4, //5' 8''
      5: 55.3, //5' 6''
      4: 51.2, //5' 4''
      3: 47.2, //5' 2''
      2: 43.1, //5' 0''
      1: 39.0, //4' 10''
    },
    man: {
      10: 84.8, //6' 4''
      9: 79.8, //6' 2''
      8: 75.3, //6' 0''
      7: 70.3, //5' 10''
      6: 65.3, //5' 8''
      5: 60.3, //5' 6''
      4: 55.3, //5' 4''
      3: 50.8, //5' 2''
      2: 45.8, //5' 0''
      1: 43.1, //4' 11''
    },
  };

  public static caloriesBurnedDoingNothingPerKgOfWeight = 1.05;
  public static waterNeededDoingNothingPerKgOfWeight = 0.9;

  public static getIdealWeight(physical: PersonStat, gender: Gender) {
    return Normals.weights[gender][physical] * (0.95 + Math.random() / 10); // +- 5%
  }
  public static getCaloryConsumptionPerDay(idealWeight: number, isWalking: boolean) {
    return 24 * idealWeight * (isWalking ? 1.5 : 1) * Normals.caloriesBurnedDoingNothingPerKgOfWeight;
  }
  public static getWaterConsumptionPerDay(idealWeight: number, isWalking: boolean) {
    return (24 * idealWeight * (isWalking ? 1.5 : 1) * Normals.waterNeededDoingNothingPerKgOfWeight + 500) / 1000;
  }
}
