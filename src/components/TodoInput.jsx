import { useState } from "react";

export function TodoInput({ handleAdd }) {
  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);

  return (
    <div className="input-container">
      <input
        placeholder="Add Task"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAdd(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
