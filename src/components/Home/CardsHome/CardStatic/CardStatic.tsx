import React from 'react';
import Image from 'next/image';

export default function CardStatic() {
  return (
    <div className='flex flex-col w-[645px] h-[480px] bg-white border p-[50px] rounded-lg ml-[30px]'>
      <div className='flex justify-between mb-[60px]'>
        <h1 className='font-scode font-medium text-[28px] leading-[35.2px] mr-20'>
          Статистика заказов
        </h1>
        <div>
          <button className='p-2 bg-[#C9C9C9] font-normal text-[14px] rounded-3xl font-ssans text-white'>
            за месяц
          </button>
          <button className='p-2 bg-[#F3F3F3] font-normal  text-[14px]  rounded-3xl font-ssans ml-2 '>
            за год
          </button>
        </div>
      </div>
      <div className='flex justify-center mb-12'>
        <div className='flex flex-col justify-center mr-36'>
          <h2 className=' font-ssans font-normal text-[24px] leading-[24px] mb-6 text-center'>
            Заказов <br /> в работе:
          </h2>
          <h2 className=' font-scode font-semibold text-[72px] leading-[90px] mb-6 text-center'>
            3
          </h2>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className=' font-ssans font-normal text-[24px] leading-[24px] mb-6 text-center'>
            Заказов <br /> выполнено:
          </h2>
          <h2 className=' font-scode font-semibold text-[72px] leading-[90px] mb-6 text-center'>
            8
          </h2>
        </div>
      </div>
      <div className='flex justify-between  '>
        <h2 className='pt-[20px] text-at-bottom font-ssans font-normal text-[24px] leading-[30px]'>
          Денег получено:
        </h2>

        <h2 className='  font-scode font-semibold text-[50px] leading-[62px] tracking-[4px] text-[#1C1C1C]'>
          85000₽
        </h2>
      </div>
    </div>
  );
}
