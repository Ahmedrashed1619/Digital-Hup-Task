import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Data from './Data'
import $ from 'jquery';

function App() {


  // handel responsive sidebar in all screens 

  const [isOpen, setIsOpen] = useState(false);
  const [isWidth, setIsWidth] = useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  }


  const widthBody = () => {
    let width = $('body').width();

    if(width > 768) {
      setIsWidth(false);
      setIsOpen(true)
    }

    else {
      setIsWidth(true);
      setIsOpen(false)
    }
  }


  $(window).on('resize', () => {
    widthBody();
  });


  useEffect(() => {
    let timeOut = setTimeout(() => {
      widthBody();
    }, 100);
  
    return () => {
      clearTimeout(timeOut)
    }
  }, [])


  // for close sidebar when click on Anything else icon toggle 
  
  const handelClose = () => {
    if(isOpen && isWidth) {
      setIsOpen(false);
    }
  }
  


  return (
      <div className='app d-flex'>
        <Sidebar isOpen={isOpen} isWidth={isWidth} />
        <div className='main-view' style={{right: isWidth ? '0px' : '280px' , width: isWidth ? '100%' : 'calc(100% - 280px)'}} onClick={handelClose}>
          <Navbar />
          <Data isOpen={isOpen} handelClick={handelClick} isWidth={isWidth} />
        </div>
      </div>
  )
}

export default App