import React from 'react';
import 'components/SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePic from 'assets/foto.jpg';
import SectionButton from 'components/SectionButton';
import { useGlobalState } from 'state-pool';

const SideBar = ({ active, setSideBarOpen, bRef }) => {
  const [sections] = useGlobalState('sections');
  const changeSidebarState = () => {
    setSideBarOpen(!active);
  };
  return (
    <div
      className={`bg-blue-400 shadow-lg ${
        active ? 'nav-menu active' : 'nav-menu'
      }`}
      ref={bRef}
    >
      <FontAwesomeIcon
        className='my-auto ml-3 xl:hidden'
        icon={faTimes}
        style={{
          fontSize: '24px',
          position: 'absolute',
          top: '10',
          right: '10',
        }}
        onClick={changeSidebarState}
      />
      <div className='w-full flex p-3'>
        <div style={{ width: '40%' }}>
          <img src={profilePic} alt='profile pic' className='rounded-full' />
        </div>
        <div className='pl-3'>
          <span className='text-lg text-white leading-7'>
            Alejandro Montoya Garcia
          </span>
          <br />
          <span className='text-xs'>alemg-dev@hotmail.com</span>
          <div className='flex' style={{ fontSize: '30px' }}>
            <div className='mr-2 social-icon'>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className='social-icon'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className='px-3'>
        {sections.map((sec) => {
          return (
            <SectionButton
              tittle={sec.tittle}
              icon={sec.icon}
              sectionRef={sec.sectionRef}
              key={sec.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
