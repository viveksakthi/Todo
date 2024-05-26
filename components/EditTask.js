"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useState } from 'react';
import cryptoRandomString from 'crypto-random-string';

export default function EditTask({ istaskOpen, setTaskOpen }) {
    
    return(
      <>
        <div className={`${istaskOpen ? 'right-0 ' : 'right-[-100%]'} fixed top-0 bottom-0 shadow-lg bg-white w-[400px] px-[20px] pt-[45px] pt-[24px] overflow-y-auto transition-all`}>
          <span 
            className='absolute left-[15px] top-[15px] cursor-pointer'
            onClick={()=> setTaskOpen(false)}
            title='Close Popup'
          >
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faArrowRight} 
              className="w-[16px] h-[16px] text-[#374151] hover:text-[#111]"               
            />
            </span>
          </span>
          
          <h2 className='text-[16px] font-medium text-[#374151] mb-[20px] flex justify-between'>
            Prepare List
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faRegularStar} 
              className="w-[18px] h-[18px] text-[#374151] hover:text-[#111] cursor-pointer" 
              title='Make task as Important'
            />
            </span>
          </h2>
          <form name="taskForm" className='grid gap-[16px]'>  
            <div>
              <input type='text' name='name' value='Prepare List'
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
              />
            </div>          
            <div>
              <input type='date' name='duedate' min="2024-04-01" pattern="\d{2}-\d{2}-\d{4}" value={'2024-06-28'}
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
              />
            </div>
            <div>
              <select
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
                name="category"
              >
                <option value=''>Choose category</option>
                <option value='red' selected>Red </option>
                <option value='blue'>Blue </option>
                <option value='yellow'>Yellow </option>
                <option value='green'>Green </option>
              </select>
            </div>
            <div>
              <select
                className='bg-white shadow w-[100%] h-[55px] outline-[#FF5845] rounded px-[16px] py-[6px]'
                name="category"
              >
                <option value='todo'>Todo</option>
                <option value='inprogress' selected>In progress</option>
                <option value='completed'>Completed</option>
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