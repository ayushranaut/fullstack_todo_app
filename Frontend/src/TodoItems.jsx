import React from 'react';

export default function TodoItems({ todo }) {
  return (
    <div className='flex ml-[150px] mt-4'>
      <input type="radio" className='w-5 h-5 mt-1' />
      <p className='pl-3 text-xl'>{todo}</p>
    </div>
  );
}
