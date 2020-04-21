import React, { Component } from "react";
import { connect } from "react-redux";

class Cards extends Component {
  render() {
    return (
      <div>
        cards
        <p>hello</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cardDetails: state
});

export default connect(mapStateToProps)(Cards);
