import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from "react";
import Profile from "./Profile";


export default function Header({ leftSidebarOpen, setLeftSidebarOpen, setHeaderHeight, headerHeight }) {
  
  const headerRef =  useRef(null);
  
  
  useEffect(()=>{
    
    const updateHeaderHeight = () =>{
      
      if(headerRef.current){
        
        setHeaderHeight( headerRef.current.offsetHeight);
        
      }
      
    }
    
    // Initial height measurement
    updateHeaderHeight()
    
    // Recalculate height on window resize and when extra content toggles
    window.addEventListener('resize' , updateHeaderHeight);
    
    return ()=> window.removeEventListener('resize' , updateHeaderHeight);
  });
  
  
  
  return (
    <header ref={headerRef}  className={`${leftSidebarOpen ? "ml-[260px]" : "ml-[0px]"} bg-[#FF5845] text-center px-[24px] py-[14px] flex gap-[16px] items-center justify-between fixed left-0 right-0 top-0`}>

      <FontAwesomeIcon 
        icon={faBars} 
        className="w-[24px] h-[24px] cursor-pointer text-white" 
        onClick={ () => setLeftSidebarOpen(!leftSidebarOpen) }
      />
      
      <Profile headerHeight={headerHeight} />
    </header>
  );
}
