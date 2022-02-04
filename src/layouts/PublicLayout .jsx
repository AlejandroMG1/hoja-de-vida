import { React, useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import SideBar from 'components/SideBar';

const PublicLayout = () => {
  const headerRef = useRef();
  const [topBarHeight, settopBarHeight] = useState('0px');
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const contentMargin = {
    marginTop: topBarHeight,
  };
  const setTHeight = () => {
    settopBarHeight(`${headerRef.current.clientHeight}px`);
  };
  useEffect(() => {
    setTHeight();
    if (headerRef.current) {
      window.addEventListener('resize', setTHeight);
    }
  }, []);
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header
        hRef={headerRef}
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
      />
      <SideBar active={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className='h-full' style={contentMargin}>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
