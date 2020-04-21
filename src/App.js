import React from "react";
import "./styles.css";
import "./components/HomePage";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import { createStore } from "redux";

function reducer() {
  console.log(this.state);
  return "working";
}
const store = createStore(reducer);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}
