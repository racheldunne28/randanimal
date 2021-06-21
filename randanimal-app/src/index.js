import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import randomKitten from "./App";
import reportWebVitals from "./reportWebVitals";

class RandomKitten extends React.Component {
  render() {
    return randomKitten();
  }
}

ReactDOM.render(
  <React.StrictMode>
    <RandomKitten />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
