
import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
    const { userid } = params;  // Destructure id from params
    console.log(params);
    console.log("Params ID", userid)
    try {
        
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'data.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(fileData);
        const userData = jsonData.data.filter( item => item.id == userid);
        console.log(userData);
        
        return new Response( JSON.stringify({message: 'Your task list fetched successfully', userdata: userData}), { 
            status: 200, 
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )            
    
      } catch (error) {
        console.error('Error handling GET request:', error);
        return new Response(JSON.stringify({ message: 'Internal Server error' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
}

export async function POST(req,{ params }) {
  const { userid } = params;
  try {
    const sortData = await req.json();
    
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
          if(item.id == userid){
            userName = item.name;            
            item.sort = sortData
          }

        })

        // Write the updated data back to the file
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');

        
        return new Response(JSON.stringify({ message: `${userName} your sort option saved successfully!` }), {
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

