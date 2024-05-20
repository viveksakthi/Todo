import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faLayerGroup, faList, faTableCellsLarge, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Titlebar() {

  return (    
    <div className="flex justify-between gap-[16px] items-center mb-[24px]">
        
        <h1 className="text-[20px] text-[#FF5845] font-semibold">Today</h1>
        
        <div className="flex border border-[#ddd] rounded">
          <button className="px-[16px] py-[10px] border-r border-[#ddd] hover:bg-[#ff58451c] bg-[#ff58451c] text-[#FF5845] font-medium flex gap-[8px] items-center">
            <FontAwesomeIcon 
              icon={faList} 
              className="w-[16px] h-[16px] text-[#FF5845]" 
            />
            List
          </button>
          <button className="px-[16px] py-[10px] hover:bg-[#ff58451c] text-[#374151] flex gap-[8px] items-center">
            <FontAwesomeIcon 
              icon={faTableCellsLarge} 
              className="w-[16px] h-[16px] text-[#FF5845]" 
            />
            Table
          </button>
        </div>
        
        <div className="flex justify-between gap-[24px]">
          <button className="text-[#374151] hover:text-[#FF5845] flex gap-[8px]">
            <FontAwesomeIcon 
              icon={faArrowRightArrowLeft} 
              className="w-[20px] h-[20px] rotate-[90deg] text-[#FF5845]" 
            />            
            Sort
          </button>
          <button className="text-[#374151] hover:text-[#FF5845] flex gap-[8px]">
            <FontAwesomeIcon 
              icon={faFilter} 
              className="w-[20px] h-[20px] text-[#FF5845]" 
            />
            Filter
          </button>
          <button className="text-[#374151] hover:text-[#FF5845] flex gap-[8px]">
            <FontAwesomeIcon 
              icon={faLayerGroup} 
              className="w-[20px] h-[20px] text-[#FF5845]" 
            />
            Group
          </button>          
        </div>
        
    </div>    
  );
}
