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
import cryptoRandomString from 'crypto-random-string';

export default function Home() {
  
  const [tabIndex, setTabIndex] = useState(1);
  
  const [istaskOpen, setTaskOpen] = useState(false);  

  return (
    <PageLayout pageTabName="Today">
      
      <Titlebar tabIndex={tabIndex} setTabIndex={setTabIndex} />
      
      <div className="flex justify-between items-end mb-[24px]">
        
        <AddTask userId={1} />{/* User id need to make as a dynamic */}
        <EditTask istaskOpen={istaskOpen} setTaskOpen={setTaskOpen} />
        
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
      
      {tabIndex == 1 && <ListView setTaskOpen={setTaskOpen} />}
      
      {tabIndex == 2 && <TableView />}
      
    </PageLayout>
  );
}
