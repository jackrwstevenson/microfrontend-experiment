import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ComponentB from "./components/ComponentB"

const App = () => <ComponentB />;

ReactDOM.render(<App />, document.getElementById("app"));
