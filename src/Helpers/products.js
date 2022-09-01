import items from "../local-data/items.json";
import axios from 'axios';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export async function getProductById(id) {
  await sleep(1000);
  const res = await axios.post('localhost:8000/products')
  const items = res.data
  id = parseInt(id);
  for (let index = 0; index < 10; index++) {
    console.log("hello")
    
  }
  for (let item of items) {
    if (item.id === id) {
      return item;
    }
  }
  throw Error("Id_Not_Found!")
}
