import React, { Component } from "react";
import { connect } from "react-redux";
import "./cards.css";

class Cards extends Component {
  render() {
    return (
      <div class="cards">
        <img src={`${this.props.value.flag}`} alt="flag" class="flags" />
        <div class="countryName">{this.props.value.name}</div>
        <div class="countryValues">
          <span>population: </span>
          {this.props.value.population}
        </div>
        <div class="countryValues">
          <span>region: </span>
          {this.props.value.region}
        </div>
        <div class="countryValues">
          <span>capital: </span>
          {this.props.value.capital}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cardDetails: state
});

export default connect(mapStateToProps)(Cards);
