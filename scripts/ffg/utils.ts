import fs from 'fs';
import * as ts from 'typescript';
import ffgToXws from '../../src/assets/ffg-xws';

export const jsonFile = (file: string): any => {
  const text = fs.readFileSync(file).toString();

  // Return sanitized text
  // If text is falsy, just return it back
  if (!text) {
    return text;
  }
  let sanitized = text;
  ffgToXws.translations.forEach((translation) => {
    const regex = new RegExp(translation.ffg.replace(/\//g, '/'), 'gi');
    sanitized = sanitized.replace(regex, translation.xws);
  });
  // The Squadbuilder API uses certain characters that visually look similar
  // but should be replaced with escaped characters
  sanitized = sanitized.replace(/\–/g, '-');
  sanitized = sanitized.replace(/\’/g, "'");
  sanitized = sanitized.replace(/\“/g, '\\"');
  sanitized = sanitized.replace(/\”/g, '\\"');

  return JSON.parse(sanitized);
};

export const getTagContent = (text: string, tag: string) => {
  const regex = RegExp(`<${tag}>` + `.*</${tag}>`, 'gi');
  const found = text.match(regex);
  if (!found || found.length == 0) {
    return undefined;
  }
  let foundText = found[0].substring(tag.length + 2);
  foundText = foundText.substring(0, foundText.length - tag.length - 3);
  return foundText;
};

export const stripTag = (text: string, tag: string) => {
  const regex = RegExp(`<${tag}>` + `.*</${tag}>`, 'gi');
  return text.replace(regex, '');
};

export const stripAllTags = (text: string) => {
  // Replace <return> followed by space with single space
  text = text.replace(/<return>\s/gi, ' ');
  // Replace <return> with no space with a single space.
  text = text.replace(/<return>/gi, ' ');
  // Replace <nonbreak> with space
  text = text.replace(/<nonbreak>/gi, ' ');
  // Replace all other tags with nothing.
  return text.replace(/\<[^\>]+\>/gi, '');
};

export const setTranslation = (
  object: any,
  prop: string,
  value: string,
  language: string
) => {
  const intlProp = `${prop}_i18n`;
  if (object[intlProp]) {
    delete object[intlProp];
  }

  if (!object[prop] || typeof object[prop] === 'string') {
    object[prop] = {};
  }

  // No need to have multiples of the same translation
  if (language !== 'en' && value === object[prop]['en']) {
    if (object[prop][language]) {
      delete object[prop][language];
    }
    return;
  }
  object[prop][language] = value;
};

export const generateXWS = (name: string) => {
  const xws = name
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll('"', '')
    .replaceAll('/', '')
    .replaceAll('-', '')
    .replaceAll("'", '')
    .replaceAll('é', 'e')
    .replaceAll('(open)', '')
    .replaceAll('(closed)', '')
    .replaceAll('(erratic)', '')
    .replaceAll('(active)', '')
    .replaceAll('(inactive)', '')
    .replace(/\(|\)/g, '');
  // console.log(name, xws);

  return xws;
};

export const asyncForEach = async (array: Array<any>, callback: Function) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export function timeout(ms: number) {
  // $FlowFixMe
  return new Promise((resolve) => setTimeout(resolve, ms));
}

declare global {
  interface String {
    // @ts-ignore
    replaceAll: (search: string, replacement: string) => string;
    trimName: () => string;
  }
}
// @ts-ignore
String.prototype.replaceAll = function (search: string, replacement: string) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.trimName = function () {
  return this.replaceAll('•', '')
    .replaceAll('“', '')
    .replaceAll('”', '')
    .replaceAll('’', '')
    .replaceAll("'", '')
    .replaceAll('"', '')
    .replaceAll('–', '-')
    .trim();
};

export const shallowCompare = (obj1: any, obj2: any) => {
  if ((!obj1 && obj2) || (obj1 && !obj2)) {
    return false;
  }
  if (!obj1 && !obj2) {
    return true;
  }

  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const getName = (f: string) =>
  f.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');

export const getFaction = (faction: string) => {
  switch (faction) {
    case 'rebel':
    case 'rebelalliance':
      return 'Rebel Alliance';

    case 'scumandvillainy':
    case 'scum':
      return 'Scum and Villainy';

    case 'galacticempire':
    case 'imperial':
      return 'Galactic Empire';

    case 'resistance':
      return 'Resistance';

    case 'firstorder':
      return 'First Order';

    case 'galacticrepublic':
      return 'Galactic Republic';

    case 'separatistalliance':
      return 'Separatist Alliance';

    default:
      return 'Rebel Alliance';
  }
};

export const getLocalData = (file: string) => {
  const oldFile = file.replace('tmp', 'assets/data').replace('.json', '.ts');
  if (fs.existsSync(oldFile)) {
    const oldString = fs.readFileSync(oldFile, 'utf8').toString();
    const tempFile = file.replace('tmp/data', 'tmp').replace('.json', '.ts');
    fs.writeFileSync(tempFile, oldString);

    const localData = require(`../${tempFile}`);
    return localData;
  }
  return undefined;
};

const clean = (code: string) =>
  code
    .replace('max', 'Math.max')
    .replace('{', '')
    .replace('}', '')
    .replace('statistics:1', 'agility');

const getCode = (code: string) => `
({ initiative, agility, ship_size }: any) => {
    return ${clean(code)};
}`;

export const getCost = (code: string) => {
  const transpiled = ts.transpile(getCode(code));
  const runnable = eval(transpiled);

  if (code.includes('initiative')) {
    return {
      variable: 'initiative',
      values: {
        ...new Array(7).fill(0).map((_, i) => runnable({ initiative: i })),
      },
    };
  } else if (code.includes('statistics:1')) {
    return {
      variable: 'agility',
      values: {
        ...new Array(4).fill(0).map((_, i) => runnable({ agility: i })),
      },
    };
  } else if (code.includes('ship_size')) {
    return {
      variable: 'size',
      values: {
        Small: runnable({ ship_size: 1 }),
        Medium: runnable({ ship_size: 2 }),
        Large: runnable({ ship_size: 3 }),
        Huge: runnable({ ship_size: 4 }),
      },
    };
  }
};
