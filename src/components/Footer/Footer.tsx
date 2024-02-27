import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#D9D9D9] py-8'>
      <div className='max-w-[1320px] mx-auto '>
        <div className='flex justify-between'>
          {/* Левая секция: Логотип и социальные иконки */}
          <div>
            <div className='text-gray-900 font-bold text-lg mb-4'>LOGO</div>
            <div className='flex space-x-2'>
              {/* Примеры иконок. Замените div на иконки или изображения */}
              <div className='w-8 h-8 bg-gray-500'></div>
              <div className='w-8 h-8 bg-gray-400'></div>
              <div className='w-8 h-8 bg-gray-300'></div>
            </div>
          </div>

          {/* Секция навигации */}
          <div className='flex space-x-12'>
            {/* Колонка навигации */}
            <div className='text-gray-600'>
              <h5 className='font-bold text-gray-900 mb-4'>О проекте</h5>
              <ul>
                <li className='mb-2'>Карта сайта</li>
                <li className='mb-2'>Нормативные документы</li>
                <li className='mb-2'>Политика конфиденциальности</li>
                <li>Пользовательское соглашение</li>
              </ul>
            </div>
            {/* Колонка навигации */}
            <div className='text-gray-600'>
              <h5 className='font-bold text-gray-900 mb-4'>Главная</h5>
              <ul>
                <li className='mb-2'>Поиск заказа</li>
                <li className='mb-2'>Профиль</li>
                <li className='mb-2'>Поддержка</li>
                <li>База знаний</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
