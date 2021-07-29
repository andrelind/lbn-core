import { SourceKey } from '../assets/sources';
import { Faction, FactionKey, Format, Slot, SlotKey } from '../types';

export const factions: Faction[] = [
  'First Order',
  'Galactic Empire',
  'Galactic Republic',
  'Rebel Alliance',
  'Resistance',
  'Scum and Villainy',
  'Separatist Alliance',
];

export const factionKeys: FactionKey[] = [
  'firstorder',
  'galacticempire',
  'galacticrepublic',
  'rebelalliance',
  'resistance',
  'scumandvillainy',
  'separatistalliance',
];

export const sourceKeys: SourceKey[] = [
  ...factions,
  'Epic',
  'Core Sets',
  'Additional Ships',
  'Additional Pilots',
  'Additional Upgrades',
];

export const formats: Format[] = ['Hyperspace', 'Extended', 'Epic'];

export const allSlots: Slot[] = [
  'Astromech',
  'Cannon',
  'Cargo',
  'Command',
  'Configuration',
  'Crew',
  'Device',
  'Force Power',
  'Gunner',
  'Hardpoint',
  'Hyperdrive',
  'Illicit',
  'Missile',
  'Modification',
  'Sensor',
  'Tactical Relay',
  'Talent',
  'Team',
  'Tech',
  'Title',
  'Torpedo',
  'Turret',
];

export const slotKeys: SlotKey[] = [
  'astromech',
  'cannon',
  'cargo',
  'command',
  'configuration',
  'crew',
  'device',
  'forcepower',
  'gunner',
  'hardpoint',
  'hyperdrive',
  'illicit',
  'missile',
  'modification',
  'sensor',
  'tacticalrelay',
  'talent',
  'team',
  'tech',
  'title',
  'torpedo',
  'turret',
];
