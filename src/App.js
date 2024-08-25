import React from "react";
// import Weather from "./Weather";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
      </div>
    </div>
  );
}
