import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    if (this.state.count == 0) {
      return (
        <div class="ml-5">
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Add to Cart
          </button>
        </div>
      );
    }
    return (
      <div class="ml-5">
        <button
          className="btn btn-outline-danger"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <b className="ml-3">{this.state.count}</b>
        <button
          className="btn btn-outline-success ml-3"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}
export default Demo;
