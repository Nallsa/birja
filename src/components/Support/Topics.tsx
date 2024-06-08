import React from 'react';

export default function Topics() {
  return (
    <div className='bg-white mb-8'>
      <div className='flex  justify-between p-[50px]'>
        <div>
          <p className='font-ssans font-normal text-[18px] leading-[22px]  '>
            19.01.2024, 15:00
          </p>
          <h2 className='font-scode font-semibold text-[38px] leading-[42px] mb-3 '>
            Тема обращения
          </h2>
          <p className='font-normal text-[18px] leading-[22px] '>
            Как уже неоднократно упомянуто, диаграммы связей разоблачены. Мы
            вынуждены отталкиваться от того, что семантический разбор внешних
            противодействий обеспечивает актуальность позиций, занимаемых
            участниками в отношении...
          </p>
        </div>
        <div className='flex flex-col items-end'>
          <p className='font-ssans font-semibold text-[20px] leading-[22px]  whitespace-nowrap  mb-3'>
            Последнее сообщение
          </p>{' '}
          <p className='font-ssans font-normal  text-[#525252] text-[20px] leading-[22px]  whitespace-nowrap pb-14 '>
            19.01.2024, 15:00
          </p>
          <p className='font-ssans font-semibold text-[20px] leading-[22px]  whitespace-nowrap  '>
            Новых сообщений: 0
          </p>
        </div>
      </div>
    </div>
  );
}
