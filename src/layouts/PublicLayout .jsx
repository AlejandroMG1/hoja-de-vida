import { React, useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import useWindowDimensions from 'Hooks/useWindowDimensions';

const PublicLayout = () => {
  const headerRef = useRef();
  const sideBarRef = useRef();
  const [topBarHeight, setTopBarHeight] = useState('0px');
  const [sideBarWidth, setSideBarWidth] = useState('0px');
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { width } = useWindowDimensions();
  const contentMargin = {
    marginTop: topBarHeight,
    marginLeft: sideBarWidth,
  };
  const setTHeight = () => {
    if (headerRef.current) {
      setTopBarHeight(`${headerRef.current.clientHeight}px`);
    }
  };
  const moveContent = () => {
    setSideBarWidth(
      `${sideBarOpen && width >= 768 ? sideBarRef.current.clientWidth : 0}px`
    );
  };
  useEffect(() => {
    setSideBarOpen(width >= 1280);
    moveContent();
    setTHeight();
    window.addEventListener('resize', setTHeight);
  }, []);
  useEffect(() => {
    moveContent();
  }, [sideBarOpen]);
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header
        hRef={headerRef}
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
      />
      <SideBar
        active={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        bRef={sideBarRef}
      />
      <div className='h-full' style={contentMargin}>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
