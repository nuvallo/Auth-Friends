import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Home = () => {
  const { friends, setFriends } = useState([]);
  return (
    <div>
      <h1>Welcome User</h1>
    </div>
  );
};

export default Home;
