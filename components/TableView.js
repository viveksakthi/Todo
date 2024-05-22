
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar as faSolidStar  } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faCalendar, faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

export default function TableView() {

  return (    
    <div className='grid'>
      <div className='bg-white px-[24px] py-[10px] flex cursor-pointer border-b border-[#f1f1f1] last:border-[transparent] text-[12px]'>
        <div className='w-[50%]'>
            <h5 className='text-[#374151] '>Task</h5>            
        </div>
        <div className='w-[10%]'>
            <h5 className='text-[#374151] text-center'>Due Date</h5>            
        </div>
        <div className='w-[10%]'>    
            <h5 className='text-[#374151] text-center'>Importance</h5>      
        </div>
      </div>
      <div className='bg-white px-[24px] py-[10px] flex cursor-pointer border-b border-[#f1f1f1] last:border-[transparent]'>
        <div className='w-[50%]'>
            <h5 className='text-[#374151] '>asdf List</h5>            
        </div>
        <div className='w-[10%]'>
            <h5 className='text-[#374151] text-center'>asdf List</h5>            
        </div>
        <div className='w-[10%] text-center'>
          <FontAwesomeIcon 
            icon={faRegularStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
        </div>
      </div>
      
      <div className='bg-white px-[24px] py-[10px] flex cursor-pointer border-b border-[#f1f1f1] last:border-[transparent]'>
        <div className='w-[50%]'>
            <h5 className='text-[#374151] '>Gym</h5>
        </div>
        <div className='w-[10%]'>
            <h5 className='text-[#374151] text-center'>asdf List</h5>            
        </div>
        <div className='w-[10%] text-center'>
          <FontAwesomeIcon 
            icon={faSolidStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
        </div>
      </div>
      
      <div className='bg-white px-[24px] py-[10px] flex cursor-pointer border-b border-[#f1f1f1] last:border-[transparent]'>
        <div className='w-[50%]'>
            <h5 className='text-[#374151] '>Evening Walking</h5>
        </div>
        <div className='w-[10%]'>
            <h5 className='text-[#374151] text-center'>asdf List</h5>            
        </div>
        <div className='w-[10%] text-center'>
          <FontAwesomeIcon 
            icon={faSolidStar} 
            className="w-[18px] h-[18px] text-[#FF5845]" 
          />
        </div>
      </div>
    </div>
  );
}
