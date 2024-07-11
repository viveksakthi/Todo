"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faClose } from '@fortawesome/free-solid-svg-icons';  
import { useCallback, useEffect, useMemo, useState } from 'react';
import PageLayout from "@/components/PageLayout";
import Titlebar from "@/components/Titlebar";
import ListView from "@/components/ListView";
import AddTask from "@/components/AddTask";
import TableView from '@/components/TableView';
import EditTask from '@/components/EditTask';
import cryptoRandomString from 'crypto-random-string';

export default function Home() {
  
  const [isLoading, setLoading] = useState(true); 
  const [tabIndex, setTabIndex] = useState(1);
  
  const [addTaskOpen, setAddTaskOpen] = useState(false); 
  const [editTaskOpen, setEditTaskOpen] = useState(false); 
  
  const userId = 1; // Make it dynamic
  const [taskId, setTaskId] = useState(null);  
  const [taskList, setTaskList] = useState([
    {
      tasks: []
    }
  ]);
  const [sortOption, setSortOption] = useState(null);
  const [shouldSort, setShouldSort] = useState(false);
  
  // Function to convert date string to Date object
  const parseDateString = (dateString) => {
    // Remove the day of the week to simplify parsing
    const dateStringWithoutDay = dateString.replace(/^[a-zA-Z]+, /, '');
    // Replace 'at' with ' ' for easier parsing
    const dateTimeString = dateStringWithoutDay.replace(' at ', ' ');
    return new Date(dateTimeString);
  };
  
  const taskSort = useCallback((option, tasks) =>{
    if(tasks.length > 0 && tasks[0].tasks.length > 0){
      
      let sortedTasks = [...tasks]; 
      
      switch(option.option){
        
        case 'alphabet':       
          // sort by name
          if(option.order == 'ascending'){
            sortedTasks[0].tasks.sort((a, b) => {            
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              
              return 0;
            }); 
          }else if(option.order == 'descending'){
            sortedTasks[0].tasks.sort((a, b) => {            
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA > nameB) {
                return -1;
              }
              if (nameA < nameB) {
                return 1;
              }
              // names must be equal
              
              return 0;
            }); 
          }         
          break;
          
        case 'due date':       
          // sort by due date
          if(option.order == 'ascending'){
            sortedTasks[0].tasks.sort((a, b) => {                          
              return new Date(a.date) - new Date(b.date)
            }); 
          }else if(option.order == 'descending'){
            sortedTasks[0].tasks.sort((a, b) => {                          
              return new Date(b.date) - new Date(a.date)
            }); 
          }         
          break;
        case 'important':       
          // sort by important
          if(option.order == 'ascending'){
            sortedTasks[0].tasks.sort((a, b) => {            
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              
              return 0;
            }); 
          }else if(option.order == 'descending'){
            sortedTasks[0].tasks.sort((a, b) => {            
              const nameA = a.name.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA > nameB) {
                return -1;
              }
              if (nameA < nameB) {
                return 1;
              }
              // names must be equal
              
              return 0;
            }); 
          }         
          break;
        case 'created date':       
          // sort by due date
          if(option.order == 'ascending'){
            sortedTasks[0].tasks.sort((a, b) => {                          
              return parseDateString(a.createdat) - parseDateString(b.createdat)
            }); 
          }else if(option.order == 'descending'){
            sortedTasks[0].tasks.sort((a, b) => {                          
              return parseDateString(b.createdat) - parseDateString(a.createdat)
            }); 
          }         
          break;
          
        default:
          break;
        
      }
      console.log("Sorting\n",sortedTasks ); 
      setLoading(false);
                 
      return sortedTasks;
      
    }else{
      
      alert("No data available");
      setLoading(false);
      
      return tasks;
      
    }    
    
  }, []);
  
  const getTaskList = useCallback(async () =>{
    
    try{
      const response = await fetch(`/api/user/${userId}` , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if(response.ok){
                                  
        setSortOption(
          result.userdata[0]?.sort 
            ? {
                option: result.userdata[0].sort.option,
                order: result.userdata[0].sort.order
              }
            : null
        );        
        setTaskList(result.userdata);
        setShouldSort(true);
        setLoading(false);
        console.log("Tasklist\n", result.userdata);
        console.log(result.message);
        
      }else{          
        alert('Failed to fetch task list'); 
        setLoading(false);       
      }
      
    }
    catch(error){
      console.error('Error fetching your task list ', error);
      alert('An error occurred while fetching your task list');
      setLoading(false);
    }
    
  }, [userId, isLoading]);
  
  
  
  useEffect(() => {
    if (shouldSort && sortOption) {
      
      setTaskList((prevTaskList) => taskSort(sortOption, prevTaskList));
      // taskSort(sortOption, taskList)
      setShouldSort(false);  // Reset the flag to prevent re-sorting
      
    }
  }, [shouldSort, sortOption, taskSort]);
  
  // Save sort option to db
  const postSortOption = async (option) =>{
    try{
      const response = await fetch(`/api/user/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)          
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
  
  useEffect(() => {
    if (sortOption != null) {
      postSortOption(sortOption);
    }
  }, [sortOption]);
  
  const handleSortOrder = () =>{
    if(sortOption != null){                       
      
      if (sortOption.order === 'ascending') {
        
        setSortOption((prevSort)=>({                      
          ...prevSort,
          order: 'descending'
        }));
        setShouldSort(true);
        
      } else {
        
        setSortOption((prevSort)=>({                      
          ...prevSort,
          order: 'ascending'
        }));
        setShouldSort(true);
        
      }                 
            
    }
  }

  return (
    <PageLayout pageTabName="Today">
      
      <div className='bg-[#fff] sticky top-[68px] mx-[-24px] mt-[-20px] px-[24px] py-[20px]'>
        
        <Titlebar userId={userId} tabIndex={tabIndex} setTabIndex={setTabIndex} setTaskList={setTaskList} taskSort={taskSort} setSortOption={setSortOption} setShouldSort={setShouldSort} shouldSort={shouldSort} postSortOption={postSortOption} setLoading={setLoading} />      
          
        <div className="flex justify-between items-end pb-[4px]">
          
          <AddTask userId={userId} setLoading={setLoading} addTaskOpen={addTaskOpen} setAddTaskOpen={setAddTaskOpen} setEditTaskOpen={setEditTaskOpen} />
          
          <EditTask userId={userId} taskId={taskId} editTaskOpen={editTaskOpen} setEditTaskOpen={setEditTaskOpen} setLoading={setLoading} />
          
          <div className="flex gap-[12px]">
            <span className="flex gap-[8px] items-center capitalize">
              
             { sortOption !== null && sortOption.order === "ascending" ?
                <span onClick={handleSortOrder} className='cursor-pointer hover:text-[#FF5845]'> 
                  <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                  icon={faArrowUp} 
                  className="w-[12px] h-[12px]" 
                />
                </span> 
                :
                <span onClick={handleSortOrder} className='cursor-pointer hover:text-[#FF5845]'> 
                  <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                  icon={faArrowDown} 
                  className="w-[12px] h-[12px]" 
                />
                </span>
              }
                         
              {sortOption != null && sortOption.option}
              
              <span className='cursor-pointer hover:text-[#FF5845]'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                icon={faClose} 
                className="w-[12px] h-[12px]" 
              />
              </span>
              
            </span>            
          </div>
          
        </div>
        
      </div>
      
      {tabIndex == 1 && <ListView userId={1} setTaskId={setTaskId} setEditTaskOpen={setEditTaskOpen} setAddTaskOpen={setAddTaskOpen} getTaskList={getTaskList} taskList={taskList} isLoading={isLoading} setLoading={setLoading} />}
      
      {tabIndex == 2 && <TableView />}
      
    </PageLayout>
  );
}
