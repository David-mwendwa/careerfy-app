import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button
            type='button'
            className='close-btn'
            onClick={() => console.log('toggle sidebar')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">
              nav links
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
