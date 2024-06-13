"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import cryptoRandomString from 'crypto-random-string';
  
const categories = [
  'Red',
  'Blue',
  'Yellow'
];
const statuses = ['To do', 'In Progress', 'Completed'];

export default  function TaskForm({ initialData }) {
  
  const [formData, setFormData] = useState({
    name: '',
    date: null,
    category: [],
    status: '',
    notes: '',
  })
    
  useEffect(()=>{
    if(initialData.taskId){
        return setFormData({
            userid: initialData.userId,
            taskid: initialData.taskId,
            name: initialData.name,
            date: initialData.date,
            category: initialData.category,
            status: initialData.status,
            notes: initialData.notes
        })
    }
    setFormData((prevState) => {
        return { 
            ...prevState,
            userid: initialData.userId
        }
    })
  }, [initialData])
  
  
  
  const handleChange = (event) =>{
    if(event.target){
      setFormData(prevState => {
        return {
          ...prevState,
          [event.target.name] : event.target.value,
          date : event
        }
      });
    }
    /*else if(event.$isDayjsObject){
      setFormData(prevState => {
        return {
          ...prevState,
          date : event,
        }
      });
    }*/
    
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(initialData.taskId){
        
    }
    else{
        addTask(); 
    }
    
    
  }
  
  const addTask = async () => {
    try{

      const response = await fetch('/api/addtask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json();
      if(response.ok){
        alert(result.message);
        console.log(result.message);
      }else{
        alert('Failed to save task');
      }

    }
    catch(error){
      console.error('Error savings in your form', error);
      alert('An error occurred while saving the task');
    }
  }
  
      
    return(
      <>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}>      
            
              <TextField
                label="Task Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
                            
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  label="Choose Date" 
                  variant="outlined" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange}
                />
              </LocalizationProvider>
              
              <FormControl fullWidth>
                <InputLabel id="category-multiple-chip-label">Choose category</InputLabel>
                <Select
                  labelId="category-multiple-chip-label"
                  id="category-multiple-chip"
                  multiple
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Choose category" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {categories.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  name="status"
                  value={formData.status}
                  label="Status"
                  onChange={handleChange}
                >
                  { statuses.map( name => 
                  <MenuItem key={name} value={name}>{name}</MenuItem>
                  )}
                </Select>
              </FormControl>
              
              <TextField
                label="Add Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
              
              <button className="px-[16px] py-[10px] border border-[#FF5845] bg-[#FF5845] hover:bg-[#fff] text-[#fff] hover:text-[#FF5845] font-medium flex gap-[8px] items-center justify-center rounded group"
              onClick={handleSubmit}
              >
                <FontAwesomeIcon 
                  icon={faCheck} 
                  className="w-[16px] h-[16px] text-[#fff] group-hover:text-[#FF5845]" 
                />
                Save
              </button>
              
          </Box>
      </>  
        
    )
}