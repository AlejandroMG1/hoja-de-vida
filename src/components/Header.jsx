import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Header = ({ hRef, sideBarOpen, setSideBarOpen }) => {
  const changeSidebarState = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div
      className='w-full bg-blue-400 lg:hidden text-center py-3 flex'
      ref={hRef}
      style={{
        position: 'fixed',
        top: '0',
      }}
    >
      <FontAwesomeIcon
        className='my-auto ml-3'
        icon={faBars}
        style={{ fontSize: '1.5rem' }}
        onClick={changeSidebarState}
      />
      <span className='text-white place-self-center mx-auto'>
        Alejandro Montoya Garcia
      </span>
    </div>
  );
};

export default Header;
