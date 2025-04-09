import React, { useState } from "react";
import "./App.css";

const friends = [
  {
    name: "Chinmayee",
    image: "/Ch.jpg",
    info: "She loves painting and reading books 📚🎨",
  },
  {
    name: "Trisha",
    image: "/Trisha.2.jpg",
    info: "Trisha is an expert in classical dance 💃",
  },
  {
    name: "Tulasi",
    image: "/Tul.png",
    info: "Tulasi enjoys trekking and adventure sports 🏞️",
  },
  {
    name: "Lalitha",
    image: "/Lal.png",
    info: "Lalitha is a coding enthusiast 💻🚀",
  },
];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Project Mates</h1> {/* ✅ Title comes first */}
      <div className="friends-row">
        {friends.map((friend, index) => (
          <div
            className="image-wrapper"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={friend.image} alt={friend.name} className="friend-image" />
            {hoveredIndex === index && (
              <div className="info-popup">
                <h3>{friend.name}</h3>
                <p>{friend.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;



