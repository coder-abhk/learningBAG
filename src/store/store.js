import { createStore } from "redux";
import productsReducer from "./reducers/reducers";

const productsStore = createStore(productsReducer);
export { productsStore };
