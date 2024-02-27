import ArrowOrder from '@/svg/ArrowOrder';
import React from 'react';

export default function NewsItem() {
  return (
    <div className='p-[30px] pr-[18px] max-w-[420px] bg-white mr-5 mb-5'>
      <div className='flex justify-between items-center mb-[60px]'>
        <h3 className='font-scode font-semibold text-[26px] pr-6 '>
          Обновление политики <br /> конфиденциальности
        </h3>

        <ArrowOrder width={29} height={22} />
      </div>

      <p className='font-ssans font-normal text-[18px]  '>
        Основные изменения, касающиеся политики конфиденциальности и обработки
        данных
      </p>
    </div>
  );
}
