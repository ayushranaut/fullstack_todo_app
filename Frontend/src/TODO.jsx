import React, { useState, useRef } from "react";
import TodoItems from './TodoItems';
import axios from "axios";

export default function TODO() {
    const [todos, setTodos] = useState([]); 
    const inputRef = useRef();
    
    function addToDo() {

        axios.post("http://localhost:3000/",{title})

        const inputText = inputRef.current.value.trim();

        if (inputText !== "") {
            setTodos(prevTodos => [...prevTodos, inputText]); 
        }

        inputRef.current.value = ""; 
    }

    return (
        <div>
            <h1 className="text-5xl font-extrabold text-orange-500">TO-DO-APP</h1>

            <div className="flex mt-10 justify-center">
                <input
                    ref={inputRef}
                    placeholder="Enter todos"
                    className="w-[350px] h-[40px] px-4 rounded-l-full border-2 border-gray-300 focus:outline-none text-gray-700 text-sm"
                />

                <button
                    className="font-extrabold bg-orange-500 rounded-r-full w-20 h-10 text-white p-2"
                    onClick={addToDo}
                >
                    Add
                </button>
            </div>

            
            <div className="mt-10">
                {todos.map((todo, index) => (
                    <TodoItems key={index} todo={todo} />
                ))}
            </div>
        </div>
    );
}
