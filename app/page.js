"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';  
import { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import Titlebar from "@/components/Titlebar";
import ListView from "@/components/ListView";
import AddTask from "@/components/AddTask";
import TableView from '@/components/TableView';
import EditTask from '@/components/EditTask';

export default function Home() {
  
  const [tabIndex, setTabIndex] = useState(1);
  
  const [istaskOpen, setTaskOpen] = useState(false);

  return (
    <PageLayout pageTabName="Today">
      
      <Titlebar tabIndex={tabIndex} setTabIndex={setTabIndex} />
      
      <div className="flex justify-between items-end mb-[24px]">
        
        <AddTask />
        <EditTask istaskOpen={istaskOpen} setTaskOpen={setTaskOpen} />
        
        <div className="flex gap-[12px]">
          <span className="flex gap-[8px] items-center">
            <FontAwesomeIcon 
              icon={faClose} 
              className="w-[12px] h-[12px]" 
            />
            Important
          </span>
          <span className="flex gap-[8px] items-center">
            <FontAwesomeIcon 
              icon={faClose} 
              className="w-[12px] h-[12px]" 
            />
            Due date
          </span>
        </div>
        
      </div>
      
      {tabIndex == 1 && <ListView setTaskOpen={setTaskOpen} />}
      
      {tabIndex == 2 && <TableView />}
      
    </PageLayout>
  );
}
