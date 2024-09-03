import connect from "@/dbConfig/dbConfig";
import RecuriterModel from "@/model/recuriter";



export async function GET(req: Request){
    await connect();
    try {
        const url=new URL(req.url);
        const query = new URLSearchParams(url.search);
        const userName = query.get('userName')

        const recuriter=await RecuriterModel.findOne({userName});
        if(recuriter){
            return Response.json({
                success:false,
                message:"User already exists"
            },{status:400})
        }

        return Response.json({
            success:true,
            message:"Valid User Name"
        },{status:200})
       
    } catch (error:any) {
        return Response.json({
            success:false,
            message:error.message
        },{status:500})
    }
}