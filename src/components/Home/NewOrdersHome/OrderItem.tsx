import MyButton from '@/components/Common/MyButton';
import React from 'react';

export default function OrderItem() {
  return (
    <div className='px-12 py-10 '>
      <div className='flex justify-between '>
        <h2 className='font-scode font-semibold text-[38px]'>
          Заголовок заказа
        </h2>
        <h2 className='font-scode font-semibold text-[24px]'>5000₽/заказ</h2>
      </div>
      <p className='font-ssans font-normal text-[20px] text-[#464646] mb-[20px]'>
        Разработка и IT {'>'} Доработка сайта
      </p>

      <p className='font-ssans font-normal text-[18px] text-[#1C1C1C] mb-[20px]'>
        Как уже неоднократно упомянуто, диаграммы связей разоблачены. Мы
        вынуждены отталкиваться от того, что семантический разбор внешних
        противодействий обеспечивает актуальность позиций, занимаемых
        участниками в отношении поставленных задач.
      </p>

      <div className='flex mb-[20px]'>
        <p className='font-ssans font-normal text-[20px] text-[#464646] mr-6 '>
          ООО “Инжерен-Строй”
        </p>

        <p>2 дня</p>
      </div>

      <MyButton
        title={'Перейти'}
        className='py-[12px] px-[34px] bg-[#B7B7B7] font-semibold text-[20px] rounded-[6px] mb-6'
      />

      <div className='border-b  pb-6 border-[#E2E2E2]'></div>
    </div>
  );
}
