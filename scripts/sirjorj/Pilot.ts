import { Action, Availability, Charge, Force } from './Common';
import { Faction, Slot } from '../../src/types';

export interface Stat {
  arc: string;
  type: string;
  value: number;
  charge: Charge;
  force: Force;
}

export interface SPilot {
  ability: string;
  actions: Action[];
  availability: Availability[];
  basesize: string;
  cardart: string;
  cardimg: string;
  cost: string;
  faction: Faction;
  ffg: string;
  hyperspace: string;
  initiative: number;
  limited: number;
  name: string;
  ship: string;
  shipAbility: string;
  stats: Stat[];
  subtitle: string;
  upgrades: Slot[];
  xws: string;
  text: string;
  unreleased?: boolean;
}
