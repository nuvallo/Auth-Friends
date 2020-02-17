import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Home extends React.Component {
  state = {
    friends: []
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
    const friends = this.state.friends;
    return (
      <div>
        {friends.map(friend => (
          <h1>{friend.name}</h1>
        ))}
      </div>
    );
  }
}

export default Home;
