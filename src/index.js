import React from "react";
import ReactDOM from "react-dom";
import MyFact from "./DemoFact.js";
import App from "./App";
import MyEvent from "./DemoEvent.js";
import Demo from "./Demo.js";
const data = ["Mohini", "Akash", "Nupur"];
const listelements = data.map(data => <li>{data}</li>);
ReactDOM.render(
  <div className="ml-5">
    {listelements}
    <MyEvent />
    <MyFact />
    <Demo />
  </div>,
  document.getElementById("root")
);
