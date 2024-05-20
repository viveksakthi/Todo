import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


export default function Profile({headerHeight}) {
    
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const profileDropdownParentRef = useRef(null);
    const profileDropdownRef = useRef(null);        
    
    useEffect(()=>{
        
        document.addEventListener('mousedown' , handleProfileDropdownOutsideClick);
        
        return ()=> document.removeEventListener('mousedown' , handleProfileDropdownOutsideClick);
        
    }, []);
    
    const toggleProfileDropdown = (event) =>{
        
        if(profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)){
            
            setProfileDropdownOpen(!profileDropdownOpen)  
            
        }
        
    }
    
    const handleProfileDropdownOutsideClick = (event) => {
        
        if(profileDropdownParentRef.current && !profileDropdownParentRef.current.contains(event.target)){
            
            setProfileDropdownOpen(false);
            
        }
    }
    
   
    
  return (
    <div ref={profileDropdownParentRef}  className="flex gap-[12px] items-center text-white relative cursor-pointer" onClick={toggleProfileDropdown}>
        <span className="w-[40px] h-[40px] rounded-full border border-[#fff] flex justify-center items-center">
            <FontAwesomeIcon 
                icon={faUser} 
                className="w-[20px] h-[20px]" 
              />
        </span>
        John duke
        <FontAwesomeIcon 
            icon={faChevronDown} 
            className="w-[20px] h-[20px] text-[#eee]" 
          />
          <div ref={profileDropdownRef} className={`${profileDropdownOpen ? '' : 'hidden'} bg-white shadow absolute right-[-24px] w-[200px] p-[16px] text-[#374151]`} style={{top: headerHeight - 14}}>
            <ul>
                <li>
                    <Link href="" className="flex justify-between gap-[10px]" title="Logout">
                        Logout
                        <FontAwesomeIcon 
                            icon={faSignOutAlt} 
                            className="w-[20px] h-[20px]" 
                          />
                    </Link>
                </li>
            </ul>
          </div>
    </div>
  );
}
