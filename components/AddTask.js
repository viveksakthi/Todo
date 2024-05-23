import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight, faStar as faSolidStar, faCheck } from '@fortawesome/free-solid-svg-icons';   
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';   
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';


import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

  
const categories = [
  'Red',
  'Blue',
  'Yellow'
];
const statuses = ['Not Started', 'In Progress', 'Completed'];


export default function AddTask() {
  
  const [istaskOpen, setTaskOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    taskName: '',
    taskDate: null,
    category: [],
    status: '',
    notes: '',
  })
  
  const handleChange = (event) =>{
    if(event.target){
      setFormData(prevState => {
        return {
          ...prevState,
          [event.target.name] : event.target.value
        }
      });
    }else if(event.$isDayjsObject){
      setFormData(prevState => {
        return {
          ...prevState,
          taskDate : event
        }
      });
    }
    
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData)
    
  }
  
  
  
  
  
    
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
        <div className={`${istaskOpen ? 'right-0 ' : 'right-[-100%]'} fixed top-0 bottom-0 shadow-lg bg-white w-[400px] px-[20px] pt-[45px] pt-[24px] overflow-y-auto transition-all`}>
          <span 
            className='absolute left-[15px] top-[15px] cursor-pointer'
            onClick={()=> setTaskOpen(false)}
            title='Close Popup'
          >
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="w-[16px] h-[16px] text-[#374151] hover:text-[#111]"               
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
          
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}>      
            
              <TextField
                label="Task Name"
                name="taskName"
                value={formData.taskName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
                            
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  label="Choose Date" 
                  variant="outlined" 
                  name="taskDate" 
                  value={formData.taskDate} 
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
        </div>
      </>  
        
    )
}