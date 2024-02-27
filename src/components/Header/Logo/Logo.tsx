import React from 'react';
import HeaderMenu from '../../../svg/HeaderMenu.js';

export default function Logo() {
  return (
    <div className='flex flex-row '>
      <div>
        <HeaderMenu />
      </div>
      <h1 className='pl-10'>LOGO</h1>
    </div>
  );
}
