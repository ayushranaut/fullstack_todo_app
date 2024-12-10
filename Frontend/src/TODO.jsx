import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import { getallTodos, addTodo, updateTodo } from "./utils/HandelAPI";

export default function TODO() {
  const [todo, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  const [toDoId, setTodoId] = useState("");

  useEffect(() => {
    getallTodos(setTodos);
  }, []);

  const updateMode = (_id, title) => {
    setUpdate(true);
    setText(title); 
    setTodoId(_id);
  };

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
          onClick={
            isUpdate
              ? () => updateTodo(toDoId, text, setText, setTodos, setUpdate)
              : () => addTodo(text, setText, setTodos)
          }
        >
          {isUpdate ? "Update" : "Add"}
        </button>
      </div>

      {/* Render todos */}
      {todo.length > 0 ? (
        <div>
          {todo.map((item) => (
            <TodoItems
              key={item._id}
              text={item.title} 
              updateMode={() => updateMode(item._id, item.title)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No todos available.</p>
      )}
    </div>
  );
}
