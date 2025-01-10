import React from "react";
import ReactDOM from "react-dom/client";
import {AddHabit} from "./components/AddHabit";
import "./index.css";
import { ChartBoost } from "./components/ChartBoost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AddHabit />
  </React.StrictMode>
);
