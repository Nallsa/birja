import React from 'react';

export default function Profile() {
  return (
    <div className='flex items-center '>
      <div className='text-gray-900'>
        <span className='font-semibold'>5500 ₽</span>
      </div>
      <div className='pl-11'>
        <span>Константин</span>
        <span className='block text-gray-500 text-sm'>исполнитель</span>
      </div>
    </div>
  );
}
