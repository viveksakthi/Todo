"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useId, useState } from 'react';
import Chip from '@mui/material/Chip';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import cryptoRandomString from 'crypto-random-string';
import TaskForm from './TaskForm';

export default  function AddTask({ userId, setLoading, addTaskOpen, setAddTaskOpen, setEditTaskOpen }) {
  
  // const [istaskOpen, setTaskOpen] = useState(false);
  
  const initialData = {
    userId: userId
  };
  
  const handleClick = () =>{
    setAddTaskOpen(true)
    setEditTaskOpen(false)
  }
      
    return(
      <>
        <button className="px-[16px] py-[10px] border border-[#FF5845] bg-[#FF5845] hover:bg-[#fff] text-[#fff] hover:text-[#FF5845] font-medium flex gap-[8px] items-center rounded group"
          onClick={()=> handleClick() }
        >
          <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
            icon={faPlus} 
            className="w-[16px] h-[16px] text-[#fff] group-hover:text-[#FF5845]" 
          />
          </span>
          New Task
        </button>
        <div className={`${addTaskOpen ? 'right-0 ' : 'right-[-100%]'} fixed top-0 bottom-0 shadow-lg bg-white w-[400px] px-[20px] pt-[45px] pt-[24px] overflow-y-auto transition-all`}>
          <span 
            className='absolute left-[15px] top-[15px] cursor-pointer'
            onClick={()=> setAddTaskOpen(false)}
            title='Close Popup'
          >
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faArrowRight} 
              className="w-[16px] h-[16px] text-[#374151] hover:text-[#111]"               
            />
            </span>
          </span>
          
          <h2 className='text-[16px] font-medium text-[#374151] mb-[20px] flex justify-between'>
            Create new task
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faRegularStar} 
              className="w-[18px] h-[18px] text-[#374151] hover:text-[#111] cursor-pointer" 
              title='Make task as Important'
            />
            </span>
          </h2>
          
          <TaskForm initialData={initialData} setLoading={setLoading} setAddTaskOpen={setAddTaskOpen} />
          
        </div>
      </>  
        
    )
}