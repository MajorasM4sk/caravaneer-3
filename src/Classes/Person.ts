import { ItemData } from "./Items/_Item";

export class PersonData {
  public id: string;
  public group: string;
  public name: string;
  public physical: number;
  public agility: number;
  public accuracy: number;
  public intelligence: number;
  public combatExperience: number;
  public travellingExperience: number;
  public doctor: number;
  public vetenary: number;
  public mechanic: number;
  public hunting: number;
  public collecting: number;
  public firstAid: number;
  public smuggling: number;
  public rangedWeapons: number;
  public closeCombat: number;
  public unarmed: number;
  public throwing: number;
  public crossbows: number;
  public pistols: number;
  public rifles: number;
  public machineGuns: number;
  public SMGs: number;
  public shotguns: number;
  public rocketLaunchers: number;
  public flamethrowers: number;
  public knives: number;
  public clubs: number;
  public choppingMelee: number;
  public swords: number;
  public dodge: number;
  public hpMax: number;
  public hp: number;
  public foodMorale: number;
  public waterMorale: number;
  public victoryMorale: number;
  public freedomMorale: number;
  public salaryMorale: number;
  public caloriesConsumption: number;
  public waterConsumption: number;
  public faction: string;
  public equipment: {
    weapon?: ItemData;
    attachment1?: ItemData;
    attachment2?: ItemData;
    defaultAmmo?: ItemData;
    secondaryWeapon?: ItemData;
    secondaryAttachment1?: ItemData;
    secondaryAttachment2?: ItemData;
    secondaryDefaultAmmo?: ItemData;
    inventory?: ItemData[];
    helmet?: ItemData;
    chestProtection?: ItemData;
  };
  public distanceTravelled: number;
  public damageTaken: number;
  public hasDamagedEye: boolean;
  public hasDamagedLeg: boolean;
  public hasDamagedArm: boolean;
  public estPrice: number;
  public sight: number;
  public weight: number;
  public idealWeight: number;
}

export class SPerson {
  public static isProtagonist = (p: PersonData): boolean => p.id === "0";
  public static getMaxLoad = (p: PersonData) => {};
  public static getSight = (p: PersonData) => {};
  public static getTotalExperience = (p: PersonData) => {};
  public static getLearningCapacity = (p: PersonData) => {};
  public static getPainThreshold = (p: PersonData) => {};
  public static reload = (p: PersonData) => {};
  public static getDodgeChance = (p: PersonData) => {};
  public static getHitChance = (p: PersonData) => {};
  public static attack = (p: PersonData) => {};
  public static move = (p: PersonData) => {};
  public static switchWeapons = (p: PersonData) => {};
  public static maxLoad = (p: PersonData) => {};
  public static getSightDistance = (p: PersonData) => {};
  public static getAP = (p: PersonData) => {};
  public static getMorale = (p: PersonData) => {};
  public static getHealthState = (p: PersonData): "Healthy" | "Lightly wounded" | "Moderately wounded" | "Severely wounded" | "Critically wounded" => {
    let ratio = p.hp / p.hpMax + 0.00001;
    if (ratio < 0.1) return "Severely wounded";
    if (ratio < 0.4) return "Severely wounded";
    if (ratio < 0.8) return "Moderately wounded";
    if (ratio < 1) return "Lightly wounded";
    return "Healthy";
  };
  public static getSpeedKmph = (p: PersonData) => {
    return (
      3 +
      0.5 *
        p.agility *
        (p.hasDamagedLeg ? 0.5 : 1) *
        (this.getHealthState(p) === "Moderately wounded" ? 0.9 : this.getHealthState(p) === "Severely wounded" ? 0.8 : this.getHealthState(p) === "Critically wounded" ? 0.2 : 1)
    );
  };
  public static getPercentIdealWeight = (p: PersonData) => {}; //< 90% is almost instant death. < 95% is pretty dangerous too
  public static getDamageResistance = (p: PersonData) => {};
  public static getFireResistance = (p: PersonData) => {};
  public static getExplosionResistance = (p: PersonData) => {};
}
