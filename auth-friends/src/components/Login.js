import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login: ", err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.login}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button>Login</Button>
      </Form>
    );
  }
}

export default Login;
