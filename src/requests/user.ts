import request from './request';
import { UserState } from '../reducers/user';
import { Provider } from '../actions/user';

export const registerUser = async (
  user: UserState
): Promise<{
  data?: {
    registerUser?: {
      id: string;
      name: string;
      provider: Provider;
      email: string;
      jwt: string;
    };
  };
}> => {
  const query = `mutation ($id: String!, $name: String!, $email: String, $provider: String!) {
      registerUser(id: $id, name: $name, email: $email, provider: $provider) {
        id
        name
        provider
        email
        jwt
      }
    }`;

  return request(query, user, {
    id: user.id,
    name: user.name,
    email: user.email,
    provider: user.provider,
  });
};
