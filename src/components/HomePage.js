import React, { Component } from "react";
import Cards from "./cards";
import { connect } from "react-redux";
import loadData from "../store/action";
import "./HomePage.css";

class HomePage extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    console.log("did Mount");
    await fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        this.props.loadData(result);
        this.setState({
          data: result
        });
      });
  }

  render() {
    let cards = Object.entries(this.props.cardDetails).map(([key, value]) => {
      return <Cards value={value} key={key} />;
    });
    return (
      <div class="home">
        <div class="cardsHoalder">
          {cards}
          {console.log("store", this.props.cardDetails)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cardDetails: state
});
const mapDispatchToProps = dispatch => {
  return {
    loadData: data => dispatch(loadData(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
