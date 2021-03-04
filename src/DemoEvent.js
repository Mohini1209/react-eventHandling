import React from "react";

class MyEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val1: "", val2: "", username: "" };
  }

  myClick = e => {
    console.log("Button Clicked");
    this.setState({ val2: this.state.val1 });
  };
  myInput = e => {
    console.log(e.target.value);
    this.setState({ val1: e.target.value });
  };
  login = e => {
    this.setState({ username: e.target.value });
  };
  myuname = e => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.myInput} />
        <button onClick={this.myClick}>Okay</button>
        <p>{this.state.val1}</p>
        <p>{this.state.val2}</p>
        Username : <input type="text" onChange={this.myuname} />
        <br />
        Password : <input type="password" />
        <br />
        <button onClick={this.login}>Login</button>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
      </div>
    );
  }
}
export default MyEvent;
