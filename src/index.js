import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResultcontextProvider } from "./components/contexts/ResultContextProvider";
import "./global.css";
ReactDOM.render(
  <ResultcontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultcontextProvider>,

  document.getElementById("root")
);
