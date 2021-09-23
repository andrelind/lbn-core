import { ShipType } from '../../../types';
import gozanticlasscruiser from './gozanti-class-cruiser';
import raiderclasscorvette from './raider-class-corvette';
import tiebainterceptor from './tie-ba-interceptor';
import tiefofighter from './tie-fo-fighter';
import tiesffighter from './tie-sf-fighter';
import tievnsilencer from './tie-vn-silencer';
import upsilonclassshuttle from './upsilon-class-shuttle';
import xiclasslightshuttle from './xi-class-light-shuttle';
import tiesebomber from './tie-se-bomber';
import tiewiwhispermodifiedinterceptor from './tie-wi-whisper-modified-interceptor';

const ships: { [s: string]: ShipType } = {
  gozanticlasscruiser,
  raiderclasscorvette,
  tiefofighter,
  tiesffighter,
  tievnsilencer,
  upsilonclassshuttle,
  tiebainterceptor,
  xiclasslightshuttle,
  tiesebomber,
  tiewiwhispermodifiedinterceptor,
};

export default ships;
