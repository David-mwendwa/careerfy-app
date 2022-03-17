import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useAppContext } from '../context/appContext';

const Navbar = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => console.log('show/hide dropdown')}>
            <FaUserCircle />
            david
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => console.log('logout user')}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
