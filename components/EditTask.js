"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useEffect, useId, useState } from 'react';
import Chip from '@mui/material/Chip';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import cryptoRandomString from 'crypto-random-string';
import TaskForm from './TaskForm';

export default  function EditTaskTask({ editTaskOpen, setEditTaskOpen, taskId, userId, setLoading }) {
  
  const [taskData, setTaskData] = useState({
    userId: userId,
    taskId: taskId
  });
  
  useEffect(()=>{
    
    const getTask = async () =>{
      try{
        
        const response = await fetch( `/api/user/${userId}/task/${taskId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          
        });
        const result = await response.json();
        if(response.ok){
          console.log(result.message);  
          console.log(result.taskdata);
          setTaskData(prevTaskData=> { 
            return {...prevTaskData, ...result.taskdata}
          });
        }else{          
          alert('Failed to fetch your task');
          console.log(result.message);          
        }
        
      }catch(error){
        console.error('Error while fetching your task', error);
      }
      
    }
    
    if(taskId !== null){
      getTask();
    }
    
  },[userId, taskId]);
  
  
  
  const deleteTask = async () => {
    try{

      const response = await fetch(`/api/user/${userId}/task/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const result = await response.json();
      if(response.ok){        
        //console.log(result.message);
        setEditTaskOpen(false);
        setLoading(true);
        alert(result.message);
      }else{
        alert('Failed to delete task');
      }

    }
    catch(error){
      console.error('Error deleting in your task', error);
      alert('An error occurred while deleting the task');
    }
  }
      
    return(
      <>
        
        <div className={`${editTaskOpen ? 'right-0 ' : 'right-[-100%]'} fixed top-0 bottom-0 shadow-lg bg-white w-[400px] px-[20px] pt-[45px] pt-[24px] overflow-y-auto transition-all`}>
          
          <span 
            className='absolute left-[15px] top-[15px] cursor-pointer'
            onClick={()=> setEditTaskOpen(false)}
            title='Close Popup'
          >
            <span> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faArrowRight} 
              className="w-[16px] h-[16px] text-[#374151] hover:text-[#111]"               
            />
            </span>
          </span>
          
          <h2 className='text-[16px] font-medium text-[#374151] mb-[20px] flex justify-between'>
            Edit task
            <div className='flex gap-[10px]'>
              <span> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                icon={faRegularStar} 
                className="w-[18px] h-[18px] text-[#374151] hover:text-[#111] cursor-pointer" 
                title='Make task as Important'
              />
              </span>
              <span
                onClick={deleteTask}
              > <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                icon={faTrash} 
                className="w-[18px] h-[18px] text-[#374151] hover:text-[#111] cursor-pointer" 
                title='Delete task'
              />
              </span>
            </div>
          </h2>
          
          <TaskForm initialData={taskData} setLoading={setLoading} />
          
        </div>
        
      </>  
        
    )
}