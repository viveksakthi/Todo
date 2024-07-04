"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';  
import { useCallback, useEffect, useState } from 'react';
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
  
  const taskSort = useCallback((option, tasks) =>{
    
    if(tasks.length > 0 && tasks[0].tasks.length > 0){
      
      let sortedTasks = [...tasks]; 
      
      switch(option){
        
        case 'alphabet':           
          // sort by name
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
          break;
        default:
          break;
        
      }
      console.log("Sorting\n",sortedTasks );            
      return sortedTasks;
      
    }else{
      
      alert("No data available");
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
                                  
        setSortOption(result.userdata[0]?.sort?.option || null);
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
    
  }, [userId]);
  
  
  
  useEffect(() => {
    if (shouldSort && sortOption) {
      
      setTaskList((prevTaskList) => taskSort(sortOption, prevTaskList));
      // taskSort(sortOption, taskList)
      setShouldSort(false);  // Reset the flag to prevent re-sorting
      
    }
  }, [shouldSort, sortOption, taskSort]);

  return (
    <PageLayout pageTabName="Today">
      
      <div className='bg-[#fff] sticky top-[68px] mx-[-24px] mt-[-20px] px-[24px] py-[20px]'>
        
        <Titlebar userId={userId} tabIndex={tabIndex} setTabIndex={setTabIndex} taskSort={taskSort} setLoading={setLoading} />        
        <div className="flex justify-between items-end pb-[4px]">
          
          <AddTask userId={userId} setLoading={setLoading} addTaskOpen={addTaskOpen} setAddTaskOpen={setAddTaskOpen} setEditTaskOpen={setEditTaskOpen} />
          
          <EditTask userId={userId} taskId={taskId} editTaskOpen={editTaskOpen} setEditTaskOpen={setEditTaskOpen} setLoading={setLoading} />
          
          <div className="flex gap-[12px]">
            <span className="flex gap-[8px] items-center">
              <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                icon={faClose} 
                className="w-[12px] h-[12px]" 
              />
              </span>
              Important
            </span>
            <span className="flex gap-[8px] items-center">
              <span title='New'> <FontAwesomeIcon id={cryptoRandomString({length: 10})}
                icon={faClose} 
                className="w-[12px] h-[12px]" 
              />
              </span>
              Due date
            </span>
          </div>
          
        </div>
        
      </div>
      
      {tabIndex == 1 && <ListView userId={1} setTaskId={setTaskId} setEditTaskOpen={setEditTaskOpen} setAddTaskOpen={setAddTaskOpen} getTaskList={getTaskList} taskList={taskList} isLoading={isLoading} setLoading={setLoading} />}
      
      {tabIndex == 2 && <TableView />}
      
    </PageLayout>
  );
}
