import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./products-context.js";
import { VideosProvider } from "./videos-context";
import { ToastProvider } from "./toast-context";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <VideosProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </VideosProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
