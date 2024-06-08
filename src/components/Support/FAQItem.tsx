import React from 'react';
import { Plus } from '@/svg/PlusAndMinus';

export default function FAQItem() {
  return (
    <div className='bg-white mb-[30px]'>
      <div className=' flex items-center justify-between px-12 py-9'>
        <h3 className='font-ssans font-semibold text-[26px] '>
          Как происходит оплата заказа после подтверждения выполнения работы?
        </h3>
        <Plus />
      </div>
    </div>
  );
}
