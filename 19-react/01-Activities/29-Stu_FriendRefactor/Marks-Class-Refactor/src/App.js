import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends
  }

  handleRemoveFriend = id => {
    console.log('Friend to remove', id);
    const newListOfFriends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({
      friends: newListOfFriends
    });
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => 
          <FriendCard
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            remove={() => this.handleRemoveFriend(friend.id)}
          />
        )}
      </Wrapper>

    )};
  
}

export default App;
