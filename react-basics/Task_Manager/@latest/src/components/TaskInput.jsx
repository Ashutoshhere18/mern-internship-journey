import React, { useState } from "react";

export default function TaskInput({addTask}) {
  const [input, setInput] = useState("");

 const handleTask=()=>{
    if(!input.trim()) return;

    addTask(input);

    setInput("");
 }

  return (
    <>
      <div className="container mt-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Task"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary rounded"
            type="button"
            id="button-addon2"
            onClick={handleTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
