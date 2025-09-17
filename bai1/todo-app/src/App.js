import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>To-do List</h2>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
