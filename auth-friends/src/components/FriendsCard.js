import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const FriendsCard = ({ friend }) => {
  return (
    <>
      {friend.map(person => (
        <Card>
          <CardBody>
            <CardTitle>{person.name}</CardTitle>
            <CardSubtitle>Age: {person.age}</CardSubtitle>
            <CardText>Email: {person.email}</CardText>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default FriendsCard;
