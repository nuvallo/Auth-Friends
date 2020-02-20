import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label } from "reactstrap";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const submitLogin = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login ", err);
      });
  };

  return (
    <div>
      <Form className="login" onSubmit={submitLogin}>
        <FormGroup>
          <Label className="login-label" for="username">
            Username
          </Label>
          <input
            className="login-input"
            type="text"
            placeholder="enter a username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="login-label" for="password">
            password
          </Label>
          <input
            className="login-input"
            type="password"
            placeholder="enter a password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Log In</Button>
      </Form>
    </div>
  );
};

export default Login;
