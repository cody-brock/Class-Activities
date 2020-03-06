import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  keyPress = (e) => {
    
  }

  render() {
    console.log(this)
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          value={this.state.username}
          name={username}
          type="text"
          placeholder="Username"
          onChange={this.keyPress}
        />
        <input
          value={this.state.password}
          name={password}
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
