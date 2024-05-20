import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';  
import PageLayout from "@/components/PageLayout";
import Titlebar from "@/components/Titlebar";
import ListView from "@/components/ListView";
import AddTask from "@/components/AddTask";



export default function Home() {

  return (
    <PageLayout pageTabName="Today">
      
      <Titlebar />
      
      <div className="flex justify-between items-end mb-[24px]">
        
        <AddTask />
        
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
      
      <ListView />
      
    </PageLayout>
  );
}
