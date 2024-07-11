import fs from 'fs';
import path from 'path';

const getCurrentDateTimeIST = () => {
    const date = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return date.toLocaleString('en-IN', options);
}
  
const isoToHumanReadable = (isoString) => {
    const date = new Date(isoString);
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    };
    return date.toLocaleString('en-US', options).replace(',', ',').replace(' at', ' at');
};

const humanReadableToISO = (dateString) => {
    // Remove the day of the week for easier parsing
    const dateStringWithoutDay = dateString.replace(/^[a-zA-Z]+, /, '');
    // Replace 'at' with ' ' for easier parsing
    const dateTimeString = dateStringWithoutDay.replace(' at ', ' ');
    const date = new Date(dateTimeString);
  
    // Convert to ISO string
    return date.toISOString();
};    
  

export async function GET(req, {params}){
    
    const {userid, taskid } = params; // Destructure id from params
    
    try{
        
        const dataDir = path.join(process.cwd(), 'data');    
        const filePath = path.join(dataDir, 'data.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        const userData = jsonData.data.filter(item => item.id == userid);
        const taskData = userData[0].tasks.filter(item => item.taskId == taskid);    
        
        if(taskData[0].date){            
            taskData[0].date = humanReadableToISO(taskData[0].date);
        }
        
        return new Response( JSON.stringify({message: 'Your task data fetched successfully', taskdata: taskData[0]}), {
            status: 200, 
            headers: {
              'Content-Type': 'application/json',
            },
        } )
        
    }catch(error){
        console.error('Error handling GET request:' , error);
        return new Response ( JSON.stringify({ message: 'Internal Server error' }), {
            status: 500, 
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }
    
}
export async function PUT(req, {params}){
    
    const {userid, taskid } = params; // Destructure id from params
    
    try{
        
        const taskData = await req.json();
        
        if(taskData.date){
            taskData.date = isoToHumanReadable(taskData.date)
        }
        
        taskData.updatedat = getCurrentDateTimeIST()
        console.log(taskData);
        
        const dataDir = path.join(process.cwd(), 'data');    
        const filePath = path.join(dataDir, 'data.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        const updatedData = jsonData.data.map(user => {
            if(user.id == userid){
                return {
                    ...user,
                    tasks: user.tasks.map(task => {
                        if(task.taskId == taskid){
                            return {...task, ...taskData}
                         }else{
                            return task
                         }
                    })
                }
            }else{
                return user;                
            }
        });        
        jsonData.data = updatedData;
        console.log(jsonData);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
        
        return new Response( JSON.stringify({message: 'Your task data updated successfully'}), {
            status: 200, 
            headers: {
              'Content-Type': 'application/json',
            },
        } )
        
    }catch(error){
        console.error('Error handling PUT request:' , error);
        return new Response ( JSON.stringify({ message: 'Internal Server error' }), {
            status: 500, 
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }
    
}
export async function DELETE(req, {params}){
    
    const {userid, taskid } = params; // Destructure id from params
    
    try{
                
        const dataDir = path.join(process.cwd(), 'data');    
        const filePath = path.join(dataDir, 'data.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        const updatedData = jsonData.data.map(user => {
            if(user.id == userid){
                return {
                    ...user,
                    tasks: user.tasks.filter(task => task.taskId != taskid) // Filter out the task with the matching taskId
                }
            }else{
                return user;                
            }
        });        
        jsonData.data = updatedData;
        console.log(jsonData);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
        
        return new Response( JSON.stringify({message: 'Your task deleted successfully'}), {
            status: 200, 
            headers: {
              'Content-Type': 'application/json',
            },
        } )
        
    }catch(error){
        console.error('Error handling DELETE request:' , error);
        return new Response ( JSON.stringify({ message: 'Internal Server error' }), {
            status: 500, 
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }
    
}