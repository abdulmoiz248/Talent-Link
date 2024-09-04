import connect from "@/dbConfig/dbConfig";

export async function POST(req: Request) {
  await connect();  
  try {
    
      let user = await req.json();
     
      return new Response(JSON.stringify({ message: 'User Registration Successful' }), {
        status: 200,
    
      });
    } catch (error) {
       return new Response(JSON.stringify({ message: 'Error processing request' }), {
        status: 500,
      });
    }
  }
  