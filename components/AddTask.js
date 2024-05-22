import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useState } from 'react';

export default function AddTask() {
  
  const [istaskOpen, setTaskOpen] = useState(false);
    
    return(
      <>
        <button className="px-[16px] py-[10px] border border-[#FF5845] bg-[#FF5845] hover:bg-[#fff] text-[#fff] hover:text-[#FF5845] font-medium flex gap-[8px] items-center rounded group"
          onClick={()=> setTaskOpen(true)}
        >
          <FontAwesomeIcon 
            icon={faPlus} 
            className="w-[16px] h-[16px] text-[#fff] group-hover:text-[#FF5845]" 
          />
          New Task
        </button>
        <div className={`${istaskOpen ? 'right-0' : 'right-[-100%] hidden'} fixed  top-0 bottom-0 shadow-lg bg-white w-[400px] px-[20px] pt-[45px] pt-[24px] overflow-y-auto`}>
          <span className='absolute left-[15px] top-[15px] cursor-pointer'>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="w-[16px] h-[16px] text-[#374151] hover:text-[#111]" 
              onClick={()=> setTaskOpen(false)}
            />
          </span>
          
          <h2 className='text-[16px] font-medium text-[#374151] mb-[20px] flex justify-between'>
            Create new task
            <FontAwesomeIcon 
              icon={faRegularStar} 
              className="w-[18px] h-[18px] text-[#374151] hover:text-[#111] cursor-pointer" 
              title='Make task as Important'
            />
          </h2>
          <form name="taskForm" className='grid gap-[16px]'>  
            <div>
              <input type='text' name='name' placeholder='Task Name'
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
              />
            </div>          
            <div>
              <input type='date' name='duedate' min="2024-04-01" pattern="\d{2}-\d{2}-\d{4}"
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
              />
            </div>
            <div>
              <select
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
                name="category"
              >
                <option>Choose Priority</option>
                <option>High </option>
                <option>Medium </option>
                <option>Low </option>
              </select>
            </div>
            <div>
              <select
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
                name="category"
              >
                <option>Todo</option>
                <option>In progress</option>
                <option>Completed</option>
              </select>
            </div>
            <div>
              <textarea type='text' name='notes' placeholder='Add Notes' rows={3}
                className='bg-white shadow w-[100%] outline-[#FF5845] rounded px-[16px] py-[10px]'
              >
              </textarea>
            </div>          
          </form>
        </div>
      </>  
        
    )
}