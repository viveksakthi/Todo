import fs from 'fs';
import path from 'path';

export async function POST(req,{ params }) {
    const userId = params;
    try {
      const sortOption = await req.json();
      
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
              taskData.taskId = item.tasks[item.tasks.length-1].taskId + 1;
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