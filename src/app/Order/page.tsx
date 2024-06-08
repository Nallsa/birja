import React from 'react';
import ButtonAdd from '@/svg/ButtonAdd';
import Topics from '@/components/Support/Topics';
import FAQItem from '@/components/Support/FAQItem';
import MyButton from '@/components/Common/MyButton';

export default function Order() {
  return (
    <div className='bg-white ]'>
      <div className='p-[50px]'>
        <div className=' flex justify-between mb-12'>
          <div>
            <h1 className='font-scode font-semibold text-[48px] '>
              Тема заказа
            </h1>

            <p className='font-ssans font-normal text-[18px] '>
              Выполнить до 19.02.2024 (5 дней)
            </p>
          </div>
          <div className=' flex flex-col items-end'>
            <p className='font-ssans font-normal text-[18px] '>
              ООО “Инжерен-Строй”
            </p>
            <h2 className='font-scode font-semibold text-[32px] '>5 000₽</h2>
          </div>
        </div>
        <p className='font-ssans font-normal text-[18px]  leading-[22px] mb-8'>
          Не следует, однако, забывать, что существующая теория способствует
          подготовке и реализации анализа существующих паттернов поведения.
          Принимая во внимание показатели успешности, повышение уровня
          гражданского сознания обеспечивает актуальность экспериментов,
          поражающих по своей масштабности и грандиозности. Таким образом,
          глубокий уровень погружения требует определения и уточнения
          направлений прогрессивного развития.
        </p>
        <div className='mb-6'>
          <h3 className='font-scode font-semibold text-[32px] mb-3'>
            Прикрепленные файлы
          </h3>
          <div className='flex items-center mb-2'>
            <div className='w-8 h-8 bg-gray-500 mr-2'></div>
            <p className='font-ssans font-normal text-[18px]  leading-[22px]'>
              2024-02-08_16-24-30.png
            </p>
          </div>
          <div className='flex items-center mb-2'>
            <div className='w-8 h-8 bg-gray-500 mr-2'></div>
            <p className='font-ssans font-normal text-[18px]  leading-[22px]'>
              2024-02-08_16-24-30.png
            </p>
          </div>
          <div className='flex items-center mb-2'>
            <div className='w-8 h-8 bg-gray-500 mr-2'></div>
            <p className='font-ssans font-normal text-[18px]  leading-[22px]'>
              2024-02-08_16-24-30.png
            </p>
          </div>
        </div>
        <div className='mb-6'>
          <h3 className='font-scode font-semibold text-[32px] '>Параметры</h3>

          <button className='py-[4px] px-[14px] bg-[#F3F3F3] rounded-[50px] font-ssans font-normal text-[14px] mr-2'>
            Java ✖
          </button>
          <button className='py-[4px] px-[14px] bg-[#F3F3F3] rounded-[50px] font-ssans font-normal text-[14px]  mr-2'>
            Java ✖
          </button>
          <button className='py-[4px] px-[14px] bg-[#F3F3F3] rounded-[50px] font-ssans font-normal text-[14px]  mr-2'>
            Java ✖
          </button>
        </div>
        <div>
          <h3 className='font-scode font-semibold text-[32px] '>
            Категория заказа
          </h3>
          <p className='font-ssans font-normal text-[18px]  leading-[22px] mb-12'>
            Разработка и IT {'>'} Доработка сайта
          </p>

          <MyButton
            title={'Предложить услугу'}
            className='py-[12px] px-[34px] bg-[#B7B7B7] font-semibold text-[20px] rounded-[6px] mb-6'
          />
        </div>
      </div>
    </div>
  );
}
