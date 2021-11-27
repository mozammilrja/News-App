import React from "react";
import ReactDOM from "react-dom";
import { NewsContextProvider } from "./Api/NewsContext";
import "./index.css";
import App from "./App.js";

ReactDOM.render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>,

  document.getElementById("root")
);
