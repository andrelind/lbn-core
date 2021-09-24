import {
  Action,
  Faction,
  Size,
  Slot,
  Stat,
  Side as ForceSide,
  Arc,
} from '../../src/types';

export interface XWDStat {
  arc: string;
  type: string;
  value: number;
}

export interface XWDAction {
  difficulty: string;
  type: string;
}

export interface XWDCharges {
  value: number;
  recovers: number;
}

export interface XWDShipAbility {
  name: string;
  text: string;
}

export interface XWDForce {
  value: number;
  recovers: number;
  side: ForceSide[];
}

export interface XWDPilot {
  name: string;
  xws: string;
  caption: string;
  initiative: number;
  limited: number;
  cost: number;
  ability: string;
  shipAbility: XWDShipAbility;
  slots: Slot[];
  image: string;
  artwork: string;
  ffg: number;
  hyperspace: boolean;
  keywords: string[];
  force: XWDForce;
  conditions: string[];
  text: string;
}

export interface XWDShip {
  name: string;
  xws: string;
  ffg: number;
  size: Size;
  dial: string[];
  dialCodes: string[];
  faction: Faction;
  stats: Stat[];
  actions: Action[];
  icon: string;
  pilots: XWDPilot[];
}

// --------------------------

export interface XWDCharges {
  value: number;
  recovers: number;
}

export interface XWDAction {
  type: string;
  difficulty: string;
}

export interface XWDGrant {
  type: string;
  value: any;
  amount?: number;
  arc?: Arc;
}

export interface XWDAlt {
  image: string;
  source: string;
}

export interface XWDRestriction {
  sizes: Size[];
  force_side: string[];
  factions: string[];
  ships: string[];
}

export interface Side {
  title: string;
  type: Slot;
  ability: string;
  slots: Slot[];
  charges: XWDCharges;
  image: string;
  artwork: string;
  ffg: number;
  text: string;
  actions: Action[];
  grants: XWDGrant[];
  force: XWDForce;
  alt: XWDAlt[];
  restrictions: XWDRestriction[];
}

export interface Values {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  Small?: number;
  Medium?: number;
  Large?: number;
}

export interface Cost {
  value: number;
  variable: string;
  values: Values;
}

export interface XWSRestriction {
  sizes: string[];
  action: Action;
  ships: string[];
  factions: Faction[];
  equipped: Slot[];
  shipAbility: string[];
  standardized?: boolean;
}

export interface XWDUpgrade {
  name: string;
  limited: number;
  xws: string;
  sides: Side[];
  cost: Cost;
  restrictions: XWSRestriction[];
  hyperspace: boolean;
}
