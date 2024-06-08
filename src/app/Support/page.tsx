import React from 'react';
import ButtonAdd from '@/svg/ButtonAdd';
import Topics from '@/components/Support/Topics';
import FAQItem from '@/components/Support/FAQItem';

export default function Support() {
  return (
    <div className=''>
      <div className='mb-12'>
        <div className='flex justify-between w-full mb-12'>
          <h1 className='font-scode font-semibold text-[48px] '>Поддержка</h1>

          <ButtonAdd />
        </div>
        <Topics />
        <Topics />
        <Topics />
      </div>

      <div>
        <h1 className='font-scode font-semibold text-[48px] mb-[50px]'>
          Частые вопросы
        </h1>

        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
      </div>
    </div>
  );
}
