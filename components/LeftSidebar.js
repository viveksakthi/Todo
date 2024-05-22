import Link from "next/link";

export default function LeftSidebar({leftSidebarOpen, headerHeight}) {
  return (
    <div className={`${leftSidebarOpen ? '' : 'hidden'} bg-[#f0f2f6] fixed left-0 top-0 bottom-0 w-[260px] text-[#a7a9ae] text-[15px]`}>      
    <div className="bg-[#FF5845] px-[16px] font-light text-[32px] text-[#fff] mb-[10px] flex items-center" style={{height: headerHeight}}>
      Todo
    </div>
      <ul className="mx-[10px]">
        <li>
          <Link href="/today" title="Today" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] text-[#FF5845] font-semibold">
            Today
          </Link>
        </li>
        <li>
          <Link href="/important" title="Important" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] ">Important</Link>
        </li>
        <li>
          <Link href="/planned" title="Planned" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] ">Planned</Link>
        </li>
        <li>
          <Link href="/tasks" title="Tasks" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] ">Tasks</Link>
        </li>
        <li>
          <Link href="/pending" title="Pending" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] ">Pending</Link>
        </li>
        <li>
          <Link href="" title="Compolete" className="px-[16px] py-[10px] block rounded hover:bg-[#ff58451c] ">Complete</Link>
        </li>
      </ul>
    </div>
  );
}
