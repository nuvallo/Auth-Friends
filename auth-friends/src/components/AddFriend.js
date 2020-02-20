import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddFriend = () => {
  const [newFriend, SetNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now
  });

  const handleChange = event => {
    SetNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const submitFriend = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("friends", newFriend)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log("SubmitFriend error: ", err);
      });
  };

  return (
    <Form className="add-friend-form" onSubmit={submitFriend}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Enter Friend Name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          type="number"
          name="age"
          id="age"
          placeholder="Enter Friend Age"
          value={newFriend.age}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Friend Email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </FormGroup>

      <Button>Add Friend</Button>
    </Form>
  );
};

export default AddFriend;
