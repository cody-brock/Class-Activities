import React, { useState } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import initialFriends from "./friends.json";
import "./App.css";

const App = () => {
  const [friends, setFriends] = useState(initialFriends)

  const handleRemoveFriend = id => {
    console.log('Friend to remove', id);
    const newListOfFriends = friends.filter(friend => friend.id !== id);
    setFriends(newListOfFriends);
  }

    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {friends.map(friend => 
          <FriendCard
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            remove={() => handleRemoveFriend(friend.id)}
          />
        )}
      </Wrapper>
    );
  
}

export default App;
