// import { client } from "../utils/fetchClient";

/*
  * There are no products API on JSON server,
  * so I decided to use API that I used before,
  * which has almost similar structure
*/

const BASE_URL =
  'https://mate-academy.github.io/react_phone-catalog/api/products.json';

export const getProducts = () => {
  return fetch(BASE_URL);
};
