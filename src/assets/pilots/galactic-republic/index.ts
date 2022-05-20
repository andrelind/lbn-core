import { ShipType } from '../../../types';
import arc170starfighter from './arc-170-starfighter';
import btlbywing from './btl-b-y-wing';
import cr90corelliancorvette from './cr90-corellian-corvette';
import delta7aethersprite from './delta-7-aethersprite';
import delta7baethersprite from './delta-7b-aethersprite';
import eta2actis from './eta-2-actis';
import laatigunship from './laat-i-gunship';
import nabooroyaln1starfighter from './naboo-royal-n-1-starfighter';
import nimbusclassvwing from './nimbus-class-v-wing';
import syliureclasshyperspacering from './syliure-class-hyperspace-ring';
import v19torrentstarfighter from './v-19-torrent-starfighter';
import gauntletfighter from './gauntlet-fighter';
import clonez95headhunter from './clone-z-95-headhunter'

const ships: { [s: string]: ShipType } = {
  arc170starfighter,
  btlbywing,
  cr90corelliancorvette,
  delta7aethersprite,
  delta7baethersprite,
  gauntletfighter,
  nabooroyaln1starfighter,
  v19torrentstarfighter,
  eta2actis,
  laatigunship,
  nimbusclassvwing,
  syliureclasshyperspacering,
  clonez95headhunter
};

export default ships;
