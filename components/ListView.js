"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar as faSolidStar  } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faCalendar, faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import cryptoRandomString from 'crypto-random-string';

export default function ListView({ setTaskOpen }) {

  return (    
    <div className='grid gap-[12px]'>
      
      <div className='bg-white shadow1 rounded px-[24px] py-[8px] flex justify-between gap-[12px] cursor-pointer'
        onClick={()=>setTaskOpen(true)}
      >
        <div>
            <h5 className='text-[#374151] '>Prepare List</h5>
            <div className='flex gap-[12px] text-[12px] items-center'>
                <span>Tasks</span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px] text-[#2564cf]'>
                  <FontAwesomeIcon 
                    icon={faCalendar} 
                    className="w-[14px] h-[14px]" 
                  />
                  Today
                </span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px]' style={{color: '#d01b2a'}}>
                  <FontAwesomeIcon 
                    icon={faFolder} 
                    className="w-[14px] h-[14px]" 
                  />
                    Red category
                </span>
            </div>
        </div>
        <div className='mt-[11px]'>
          <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
            icon={faRegularStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
          </span>
        </div>
      </div>
      
      <div className='bg-white shadow1 rounded px-[24px] py-[8px] flex justify-between gap-[12px] cursor-pointer'
        onClick={()=>setTaskOpen(true)}
      >
        <div>
            <h5 className='text-[#374151] '>Gym</h5>
            <div className='flex gap-[12px] text-[12px] items-center'>
                <span>Tasks</span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px]'>
                  <FontAwesomeIcon 
                    icon={faCalendar} 
                    className="w-[14px] h-[14px]" 
                  />
                  Tomorrow
                </span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px]' style={{color: '#2564cf'}}>
                  <FontAwesomeIcon 
                    icon={faFolder} 
                    className="w-[14px] h-[14px]" 
                  />
                    Blue category
                </span>
            </div>
        </div>
        <div className='mt-[11px]'>
          <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
            icon={faSolidStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
          </span>
        </div>
      </div>
      
      <div className='bg-white shadow1 rounded px-[24px] py-[8px] flex justify-between gap-[12px] cursor-pointer'
        onClick={()=>setTaskOpen(true)}
      >
        <div>
            <h5 className='text-[#374151] '>Evening Walking</h5>
            <div className='flex gap-[12px] text-[12px] items-center'>
                <span>Tasks</span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px]'>
                  <FontAwesomeIcon 
                    icon={faCalendar} 
                    className="w-[14px] h-[14px]" 
                  />
                  Due Wed, May 22
                </span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                <span className='flex items-center gap-[8px]' style={{color: '#e7c200'}}>
                  <FontAwesomeIcon 
                    icon={faFolder} 
                    className="w-[14px] h-[14px]" 
                  />
                    Yellow category
                </span>
            </div>
        </div>
        <div className='mt-[11px]'>
          <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
            icon={faSolidStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
          </span>
        </div>
      </div>
    </div>
  );
}
