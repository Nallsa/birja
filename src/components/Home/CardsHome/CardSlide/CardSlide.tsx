import React from 'react';
import { ArrowLeft, ArrowRight } from '../../../../svg/ArrowsSlide';

export default function CardSlide() {
  return (
    <div>
      <div className='w-[645px] h-[480px] bg-white flex justify-center items-center border p-2 rounded-lg mb-5'>
        <h1 className='text-2xl font-semibold '>Слайдер</h1>
      </div>
      <div className='flex'>
        <button className='bg-white  p-[10px] rounded-[50px]'>
          <ArrowLeft />
        </button>
        <button className='bg-white p-[10px] rounded-[50px] ml-[18px]'>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
