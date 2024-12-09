import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function TodoItems({ text }) {
  return (
    <div className='flex mt-6 h-10 p-1 w-[600px] justify-center ml-[50px]'>
      <div className='w-[300px] flex'>
        <p className='pl-3 text-xl'>{text}</p>  
      </div>
      <div className='flex p-1'>
        <MdOutlineEdit className='size-6 mr-2' />
        <MdDeleteOutline className='size-6' />
      </div>
    </div>
  );
}
