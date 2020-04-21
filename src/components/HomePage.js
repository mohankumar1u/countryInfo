import React, { Component } from "react";
import Cards from "./cards";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "../store/reducer";

class HomePage extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    console.log("did Mount");
    await fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }

  render() {
    const store = createStore(Reducer, this.state);
    return (
      <div>
        <Provider store={store}>
          {console.log("store", store.getState())}
          <Cards />
        </Provider>
      </div>
    );
  }
}

export default HomePage;
