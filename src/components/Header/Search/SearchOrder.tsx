import HeaderSearch from '@/svg/HeaderSearch';
import React from 'react';

export default function SearchOrder() {
  return (
    <div className='flex items-center '>
      <div className='flex items-center border-[#B2B9C0] border p-2 rounded-lg w-[420px] justify-between '>
        <input type='text' placeholder='Найти заказ' />
        <HeaderSearch />
      </div>
    </div>
  );
}
