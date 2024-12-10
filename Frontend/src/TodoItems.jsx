import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function TodoItems({ text, updateMode, deleteTodo }) {
  return (
    <div className="flex mt-6 h-10 p-1 w-[600px] justify-between items-center ml-[50px] border-b-2 border-gray-300">
      
      <div className="w-[300px] flex">
        <p className="pl-3 text-xl">{text}</p>
      </div>
      
      <div className="flex p-1">
        <MdOutlineEdit
          className="size-6 mr-4 cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={updateMode}
        />
        <MdDeleteOutline
          className="size-6 cursor-pointer text-red-500 hover:text-red-700"
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
}

