import React from 'react'
import './nav.css';
import NavAvatar from './NavAvatar';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
function Nav() {
  return (
    <nav className='header-nav ms-auto'>
      <ul className='d-flex align-items-center'>
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  )
}

export default Nav