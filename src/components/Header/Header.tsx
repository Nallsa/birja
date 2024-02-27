import React from 'react';
import Logo from './Logo/Logo';
import SearchOrder from './Search/SearchOrder';
import Profile from './Profile/Profile';

export default function Header() {
  return (
    <header className='flex items-center justify-between mx-14 py-5 '>
      <Logo />
      <SearchOrder />
      <Profile />
    </header>
  );
}
