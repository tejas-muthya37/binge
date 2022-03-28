import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./products-context.js";
import { VideosProvider } from "./videos-context";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <VideosProvider>
        <App />
      </VideosProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
