
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function ListView() {

  return (    
    <div className='group gap-[12px]'>
        <div className='bg-white shadow rounded px-[24px] py-[6px] flex justify-between gap-[12px] cursor-pointer'>
            <div className=''>
                <h5 className='text-[#374151] '>Prepare List</h5>
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
                        Today
                    </span>
                    <FontAwesomeIcon 
                      icon={faCircle} 
                      className="w-[4px] h-[4px]" 
                    />
                    <span style={{color: '#d01b2a'}}>
                        Red Category
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}
