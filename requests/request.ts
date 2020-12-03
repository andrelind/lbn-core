import { UserState } from "../reducers/user";

const BASE_URL = process.env.BASE_URL || "";

const graphql = (query: string, user: UserState, variables?: Object) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-jwt": user.jwt || "",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((x) => x.json())
    .catch((err) => {
      if (
        err === "Network request failed" ||
        err.message === "Network request failed"
      ) {
        console.log(err);
      } else {
        console.log(err);
        throw err;
      }
    });
};

export default graphql;
