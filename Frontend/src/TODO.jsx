import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import { getallTodos, addTodo } from "./utils/HandelAPI";

export default function TODO() {
  const [todo, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getallTodos(setTodos);
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-orange-500">TO-DO-APP</h1>

      <div className="flex mt-10 justify-center">
        <input
          type="text"
          placeholder="Enter todos"
          className="w-[350px] h-[40px] px-4 rounded-l-full border-2 border-gray-300 focus:outline-none text-gray-700 text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="font-extrabold bg-orange-500 rounded-r-full w-20 h-10 text-white p-2"
          onClick={() => addTodo(text, setText, setTodos)}
        >
          Add
        </button>
      </div>

      {/* Render todos */}
      {todo.length > 0 ? (
        <div>
          {todo.map((item) => (
            <TodoItems key={item._id} text={item.title} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No todos available.</p>
      )}
    </div>
  );
}
