"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faLayerGroup, faList, faTableCellsLarge, faFilter } from '@fortawesome/free-solid-svg-icons';
import cryptoRandomString from 'crypto-random-string';
import TaskManipulation from './TaskManipulation';

export default function Titlebar({ userId, tabIndex, setTabIndex, taskSort, setLoading }) {

  return (    
    <div className="flex justify-between gap-[16px] items-center mb-[20px]">
        
        
        
        <div className="flex border border-[#ddd] rounded">
          <button 
            className={`${tabIndex == 1 ? 'bg-[#ff58451c] text-[#FF5845] font-medium' : 'text-[#374151]' } px-[16px] py-[10px] first:border-r first:border-[#ddd] hover:bg-[#ff58451c] flex gap-[8px] items-center`}
            onClick={() => setTabIndex(1)}
          >
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faList} 
              className="w-[16px] h-[16px] text-[#FF5845]" 
            />
            </span>
            List
          </button>
          <button 
            className={`${tabIndex == 2 ? 'bg-[#ff58451c] text-[#FF5845] font-medium' : 'text-[#374151]' } px-[16px] py-[10px] first:border-r first:border-[#ddd] hover:bg-[#ff58451c] flex gap-[8px] items-center`}
            onClick={() => setTabIndex(2)}
          >
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faTableCellsLarge} 
              className="w-[16px] h-[16px] text-[#FF5845]" 
            />
            </span>
            Table
          </button>
        </div>
        
        <TaskManipulation userId={userId} taskSort={taskSort} setLoading={setLoading} />
        
    </div>    
  );
}
