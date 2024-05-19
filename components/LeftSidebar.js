import Image from "next/image";
import Link from "next/link";


export default function LeftSidebar({leftSidebarOpen}) {
  return (
    <div className={`${leftSidebarOpen ? '' : 'hidden'} bg-[#f0f2f6] fixed left-0 top-0 bottom-0 w-[260px] text-[#a7a9ae] text-[15px]`}>      
    <div className="bg-[#004fad] px-[16px] font-light text-[32px] text-[#fff] mb-[10px] h-[52px] flex items-center">
      Todo
    </div>
      <ul className="mx-[10px]">
        <li>
          <Link href="" title="Today" className="px-[16px] py-[10px] block text-[#1570ef] bg-[#1051ab26] font-semibold rounded">Today</Link>
        </li>
        <li>
          <Link href="" title="Important" className="px-[16px] py-[10px] block">Important</Link>
        </li>
        <li>
          <Link href="" title="Planned" className="px-[16px] py-[10px] block">Planned</Link>
        </li>
        <li>
          <Link href="" title="All" className="px-[16px] py-[10px] block">All</Link>
        </li>
        <li>
          <Link href="" title="Pending" className="px-[16px] py-[10px] block">Pending</Link>
        </li>
        <li>
          <Link href="" title="Compolete" className="px-[16px] py-[10px] block">Compolete</Link>
        </li>
      </ul>
    </div>
  );
}
