import React from 'react';
import NewsItem from './NewsItem';
import MyButton from '@/components/Common/MyButton';

export default function NewsHome() {
  return (
    <div className='mb-6'>
      <h1 className='font-scode font-semibold text-[48px] mb-12'>Новости</h1>

      <div className='flex flex-wrap  '>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

      <MyButton
        title={'Ещё'}
        className='py-[12px] px-[34px] bg-[#B7B7B7] font-semibold text-[20px] rounded-[6px] '
      />
    </div>
  );
}
