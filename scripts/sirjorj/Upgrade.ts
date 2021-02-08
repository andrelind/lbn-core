import { Action, Availability, Charge, Force } from './Common';
import { Slot } from '../../src/types';

export interface Cost {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  variable: string;
  value?: number;
  agi0?: number;
  agi1?: number;
  agi2?: number;
  agi3?: number;
  large?: number;
  medium?: number;
  small?: number;
}

export interface Attack {
  arc: string;
  maxrange: number;
  minrange: number;
  ordnance: boolean;
  value: number;
}

export interface Side {
  ability: string;
  cardart: string;
  cardimg: string;
  charge: Charge;
  ffg: string;
  restrictions: string;
  slot: Slot[];
  title: string;
  type: Slot;
  attack: Attack;
  actions: Action[];
  text: string;
  force: Force;
}

export interface SUpgrade {
  availability: Availability[];
  cost: Cost;
  hyperspace: string;
  limited: number;
  name: string;
  side: Side[];
  xws: string;
  unreleased?: boolean;
}
