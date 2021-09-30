import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./sass/index.scss";
// products store provider
import { Provider } from "react-redux";
import { productsStore } from "./store/store";

render(
  <Provider store={productsStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
