import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./products-context.js";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
