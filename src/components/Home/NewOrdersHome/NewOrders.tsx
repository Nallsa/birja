import React from 'react';
import ArrowOrder from '../../../svg/ArrowOrder';
import OrderItem from './OrderItem';

export default function NewOrders() {
  return (
    <div>
      <div className='flex justify-between pb-12'>
        <div className='flex justify-center items-center '>
          <h1 className=' font-scode font-semibold text-[48px] leading-[60px] '>
            Новые заказы на бирже
          </h1>
        </div>

        <div className=' flex justify-center items-center  '>
          <h2 className='font-ssans font-normal text-[18px] leading-[22px] mr-2 '>
            ко всем
          </h2>{' '}
          <ArrowOrder />
        </div>
      </div>
      <div className='bg-white'>
        <OrderItem />
      </div>{' '}
    </div>
  );
}
