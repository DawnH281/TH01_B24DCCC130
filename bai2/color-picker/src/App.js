// App.js
import React, { useState } from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "130px",
        height: "130px",
        border: "1px solid black",
        marginTop: "10px",
        backgroundColor: color,
      }}
    ></div>
  );
}

function App() {
  const [color, setColor] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      <ColorBox color={color} />
    </div>
  );
}

export default App;
