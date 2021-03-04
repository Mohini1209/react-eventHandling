import React from "react";

class Factorial extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateFactorial(num) {
    var i = 1;
    var ans = 1;
    for (i = num; i > 0; i--) {
      ans = ans * i;
    }
    return ans;
  }
  render() {
    return <div> factorial is {this.calculateFactorial(this.props.num)} </div>;
  }
}
export default Factorial;
