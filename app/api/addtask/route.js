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

export async function POST(req) {
  try {
    const taskData = await req.json();

    taskData.createdat = getCurrentDateTimeIST()
    taskData.updatedat = getCurrentDateTimeIST()
    
    // Define the path to the data.json file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'data.json');
    
    // Ensure the data directory exists
    if(fs.existsSync(filePath)){      

        let jsonData;  

        // Read the existing data from the file      
        const fileData = fs.readFileSync(filePath , 'utf-8')        
        jsonData = JSON.parse(fileData)
        console.log('File contents (sync):', jsonData);        

        let userName;
        // Push the new task data
        jsonData.data.map(item =>{          
          if(item.id == taskData.userid){
            delete taskData.userid
            taskData.taskId = item.tasks.length + 1;
            userName = item.name;            
            item.tasks.push(taskData);
          }

        })

        // Write the updated data back to the file
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');

        
        return new Response(JSON.stringify({ message: `${userName} your task saved successfully!` }), {
          status: 200,
          headers: {
                'Content-Type': 'application/json',
              },
        });        
     

    }else{

      console.log('File not exist');

    }


  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
