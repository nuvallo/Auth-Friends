import React from "react";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

const Home = () => {
  return (
    <div>
      <AddFriend />
      <FriendsList />
    </div>
  );
};

export default Home;
