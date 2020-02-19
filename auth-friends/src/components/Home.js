import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Home extends React.Component {
  state = {
    friends: [],
    newFriend: {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("friends")
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    this.handleChange = e => {
      this.setState({
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", this.state.friends)
        .then(friend => {
          this.setState({
            friends: [friend.data]
          });
        })
        .catch(err => console.error(err));
    };

    const friends = this.state.friends;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormGroup>
              <Label for="name">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Age</Label>
            <Input
              type="text"
              name="age"
              id="age"
              placeholder="Enter Age"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">ID</Label>
            <Input
              type="text"
              name="id"
              id="id"
              placeholder="Enter ID"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button>Add Friend</Button>
        </Form>
        {friends.map(friend => (
          <Card className="card">
            <CardBody>
              <CardTitle>{friend.name}</CardTitle>
              <CardSubtitle>Age: {friend.age}</CardSubtitle>
              <Button className="card-btn">Delete</Button>
              <Button className="card-btn">Edit</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default Home;
