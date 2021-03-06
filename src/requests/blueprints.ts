import request from './request';
import { BluePrint } from '../types';

export const setBlueprint = async (
  blueprint: BluePrint,
  user: Object
): Promise<{
  data?: { blueprint?: { success: boolean } };
}> => {
  const copy = JSON.parse(JSON.stringify(blueprint));
  delete copy.launch_bay;

  const query = `mutation ($blueprint: BlueprintInput!) {
      blueprint(blueprint: $blueprint) {
        success
      }
    }`;

  return request(query, { ...user, language: 'en' }, { blueprint: copy });
};

export const deleteBlueprint = async (
  uid: string,
  user: Object
): Promise<{
  data?: { removeBlueprint?: { success: boolean } };
}> => {
  const query = `mutation ($uid: ID!) {
      removeBlueprint(uid: $uid) {
        success
      }
    }`;

  return request(query, { ...user, language: 'en' }, { uid });
};
