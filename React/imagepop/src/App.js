import React, { useState } from "react";
import "./App.css";

const friends = [
  { name: "Chinmayee", image: "/C.jpg" },
  { name: "Trisha", image: "/T.jpg" },
  { name: "Tulasi", image: "/Tu.png" },
  { name: "Lalitha", image: "/L.png" },
];

function App() {
  const [hoveredFriend, setHoveredFriend] = useState(null);

  return (
    <div className="container">
      <h1>Project mates</h1>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredFriend(friend)}
            onMouseLeave={() => setHoveredFriend(null)}
          >
            {friend.name}
            {hoveredFriend === friend && (
              <img
                src={friend.image}
                alt={friend.name}
                className="popup-image"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
