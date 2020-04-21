import React from "react";
import "./styles.css";
import "./components/HomePage";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}
