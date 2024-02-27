import React from 'react';
import CardSlide from './CardSlide/CardSlide';
import CardStatic from './CardStatic/CardStatic';

export default function Cards() {
  return (
    <div className='flex  justify-center mb-24'>
      <CardSlide />
      <CardStatic />
    </div>
  );
}
