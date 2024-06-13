
import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
    const { id } = params;  // Destructure id from params
    try {
        
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'data.json');
        
        const fileData = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(fileData);
        const userData = jsonData.data.filter( item => item.id == id);
        
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