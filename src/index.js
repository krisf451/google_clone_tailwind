import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

import App from "./App";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
