import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';        

export default function AddTask() {
    return(
        
        <button className="px-[16px] py-[10px] border border-[#FF5845] bg-[#FF5845] hover:bg-[#fff] text-[#fff] hover:text-[#FF5845] font-medium flex gap-[8px] items-center rounded group">
          <FontAwesomeIcon 
            icon={faPlus} 
            className="w-[16px] h-[16px] text-[#fff] group-hover:text-[#FF5845]" 
          />
          Table
        </button>
        
    )
}