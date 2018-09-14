import React from "react";
import ReactDOM from "react-dom";

import App from "./src/containers/App/App";

import "./src/scss/main.scss";

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);
