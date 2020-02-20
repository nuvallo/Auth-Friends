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
        <Card className="friend-card">
          <CardBody>
            <CardTitle>{person.name}</CardTitle>
            <CardSubtitle>Age: {person.age}</CardSubtitle>
            <CardText>Email: {person.email}</CardText>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default FriendsCard;
