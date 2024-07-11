"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar as faSolidStar, faSpinner  } from '@fortawesome/free-solid-svg-icons';
import { faFolder, faCalendar, faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import cryptoRandomString from 'crypto-random-string';
import { useEffect, useState } from 'react';

export default function ListView({ setEditTaskOpen, setAddTaskOpen, setTaskId, getTaskList, taskList, isLoading }) {
  
  useEffect(()=>{    
    
    getTaskList();
    
  },[getTaskList]); 
  
  const handleClick = (taskId) =>{
    setEditTaskOpen(true);
    setAddTaskOpen(false);
    setTaskId(taskId);
  }
  
  
  
  
    const renderTaskListItem = item =>{
      return (
        <div key={item.taskId} className='bg-white shadow1 rounded px-[24px] py-[8px] flex justify-between gap-[12px] cursor-pointer'
          onClick={()=>handleClick(item.taskId)}
        >
          <div>
            <h5 className='text-[#374151] '>{item.name}</h5>
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
                  {item.date}
                </span>
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className="w-[4px] h-[4px]" 
                />
                {item.category.length > 0 ? item.category.map(renderCategoryItem) : ''}
                
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
      );
    }
    
    const renderCategoryItem = (item, index) =>{
      
      return <span key={index} className='flex items-center gap-[8px]' style={{color: item=="Yellow" ? '#ffbc00': item}}>
        <FontAwesomeIcon 
          icon={faFolder} 
          className="w-[14px] h-[14px]" 
        />
          {item} category 
      </span>
    }
  
  
  

  return (    
    <>
      
      {isLoading ? 
        <div className='text-center'>
          <div className='w-[24px] mx-auto mb-[6px]'>
            <FontAwesomeIcon 
              icon={faSpinner} 
              spin 
              className="w-[24px] h-[24px]" 
            />
          </div>
          <div>Loading</div>
        </div> 
        : 
        <div className='mt-[2px] grid gap-[12px]'>
        { taskList[0].tasks.length > 0 ? taskList[0].tasks.map(renderTaskListItem) : 'No Task available' }
        </div>      
      }
      
    </>
  );
}
