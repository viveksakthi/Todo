"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faLayerGroup, faFilter } from '@fortawesome/free-solid-svg-icons';
import cryptoRandomString from 'crypto-random-string';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function TaskManipulation({userId, taskSort, setLoading}) {
    
    const [anchorElSort, setAnchorElSort] = useState(null);
    const openSort = Boolean(anchorElSort);
    const handleClickSort = (event) => {
      setAnchorElSort(event.currentTarget);
    };
    const handleCloseSort = (option) => {
      setAnchorElSort(null);
      setLoading(true);
      taskSort(option);
      postSortOption(option,'assending');
      
    };
      
    const [anchorElGroup, setAnchorElGroup] = useState(null);
    const openGroup = Boolean(anchorElGroup);
    const handleClickGroup = (event) => {
      setAnchorElGroup(event.currentTarget);
    };
    const handleCloseGroup = () => {
      setAnchorElGroup(null);
    };
    
    // Save sort option to db
    const postSortOption = async (option,order) =>{
      try{
        const response = await fetch(`/api/user/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            option: option,
            order: order
          })          
        });
        const result = await response.json();
        if(response.ok){
          // setLoading(true);
          console.log(result.message);
        }else{
          console.log('Failed to save the sort data')
        }
      }
      catch(error){
        console.error('Error while saving the sort data', error);
      }
    }

  return (    
    <div className="flex justify-between gap-[24px]">
      <div>
        <button className="text-[#374151] hover:text-[#FF5845] flex gap-[8px]"
            id="sort-button"
            aria-controls={openSort ? 'sort-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openSort ? 'true' : undefined}
            onClick={handleClickSort}
        >
            <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
              icon={faArrowRightArrowLeft} 
              className="w-[20px] h-[20px] rotate-[90deg] text-[#FF5845]" 
            />     
            </span>       
            Sort
        </button>
          <Menu
            id="sort-menu"
            anchorEl={anchorElSort}
            open={openSort}
            onClose={handleCloseSort}
            MenuListProps={{
              'aria-labelledby': 'sort-button',
            }}
            
          >
            <MenuItem onClick={()=>handleCloseSort('alphabet')}>Alphabet</MenuItem>
            <MenuItem onClick={handleCloseSort}>Due date</MenuItem>
            <MenuItem onClick={handleCloseSort}>Important</MenuItem>
            <MenuItem onClick={handleCloseSort}>Create date</MenuItem>
          </Menu>
      </div>
      
      
      
      <div>
        <button className="text-[#374151] hover:text-[#FF5845] flex gap-[8px]"
          id="group-button"
          aria-controls={openGroup ? 'group-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openGroup ? 'true' : undefined}
          onClick={handleClickGroup}   
        >
          <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
            icon={faLayerGroup} 
            className="w-[20px] h-[20px] text-[#FF5845]" 
          />
          </span>
          Group
        </button>  
        <Menu
          id="group-menu"
          anchorEl={anchorElGroup}
          open={openGroup}
          onClose={handleCloseGroup}
          MenuListProps={{
            'aria-labelledby': 'group-button',
          }}
        >
          <MenuItem onClick={handleCloseGroup}>Category</MenuItem>
          <MenuItem onClick={handleCloseGroup}>Status</MenuItem>
        </Menu> 
      </div>       
    </div>   
  );
}
