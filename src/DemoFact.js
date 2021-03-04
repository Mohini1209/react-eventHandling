import React from "react";
import Factorial from "./Factorial.js";
import "./style.css";
class MyFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val1: "", val2: "" };
  }
  myClick = e => {
    console.log("Button Clicked");
    this.setState({ val2: this.state.val1 });
  };
  myInput = e => {
    console.log(e.target.value);
    this.setState({ val1: e.target.value });
  };
  render() {
    return (
      <div>
        <input class="input" type="number" onChange={this.myInput} />
        <button className="btn btn-primary" onClick={this.myClick}>
          Okay
        </button>
        <br />
        <br />
        <p>{this.state.val1}</p>
        <p>
          <Factorial num={this.state.val2} />
        </p>
      </div>
    );
  }
}
export default MyFact;
