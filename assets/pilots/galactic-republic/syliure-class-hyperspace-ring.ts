import { ShipType } from "../../../types";

const t: ShipType = {
  name: {
    en: "Syliure-class Hyperspace Ring",
  },
  xws: "syliureclasshyperspacering",
  size: "Small",
  dial: [],
  faction: "Galactic Republic",
  stats: [
    { type: "agility", value: 1 },
    { type: "hull", value: 1 },
    { type: "shields", value: 2 },
  ],
  actions: [],

  ability: {
    name: { en: "Hyperspace Docking Ring" },
    text: {
      en: `1 Delta-7 Aethersprite, Eta-2 Actis, or Nimbus-class V-wing can dock with you.

While a ship is docked with you, you gain that ship's initiative and are assigned that ship's dial. While you execute a maneuver, reduce its speed to 1. Before you execute an advanced maneuver, execute a white stationary maneuver ([Stop]) instead, then you may rotate 90º or 180º.

While no ship is docked with you, you are not assigned a maneuver dial and do not activate or engage.`,
    },
  },
  pilots: [
    {
      xws: "transgalmegcontrollink",
      name: { en: "TransGalMeg Control Link" },
      cost: 5,
      initiative: 0,
      limited: 0,
      slots: ["Hyperdrive"],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;
