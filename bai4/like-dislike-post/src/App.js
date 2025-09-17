import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";

library.add(faThumbsUp, faThumbsDown, farThumbsUp);

function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>
        <FontAwesomeIcon icon={["far", "thumbs-up"]} /> {likes}
      </button>
      <button onClick={() => setDislikes(dislikes + 1)} style={{ marginLeft: "10px" }}>
        <FontAwesomeIcon icon={["fas", "thumbs-down"]} /> {dislikes}
      </button>
    </div>
  );
}

function App() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <div style={{ padding: "20px" }}>
      {posts.map((text, index) => (
        <Post key={index} text={text} />
      ))}
    </div>
  );
}

export default App;
