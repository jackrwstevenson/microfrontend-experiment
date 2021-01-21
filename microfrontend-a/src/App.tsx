import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ComponentA from "./components/ComponentA"

const App = () => <ComponentA />;

ReactDOM.render(<App />, document.getElementById("app"));
