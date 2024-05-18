import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header({ leftSidebarOpen, setLeftSidebarOpen }) {
  return (
    <header className="text-center px-[24px] py-[14px] flex justify-between">

      <FontAwesomeIcon 
        icon={faBars} 
        className="w-[24px] h-[24px] cursor-pointer" 
        onClick={ () => setLeftSidebarOpen(!leftSidebarOpen) }
      />

    </header>
  );
}
