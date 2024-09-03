import mongoose, { Document,Schema } from 'mongoose';


export interface Applicant extends Document{
    name: string,
    userName: string,
    email: string,
    phone: string,
    password:string,
    linkedIn: string,
    bio: string,
    skills: string[],
    experience: string[],
}


const ApplicantScehma: Schema<Applicant> = new Schema({
   name:{
      type: String,
    
   },
   userName:{
    type: String,
    required: [true,"Please enter User Name"],
    unique: true
   },
   email:{
    type: String,
    required: [true,"Please enter Email"],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
   },
   phone:{
    type: String,
    required: [true,"Please enter Phone Number"],
   },
   password:{
    type: String,
    required: [true,"Please enter Password"],
    minlength: 8,
   },
   linkedIn:{
    type: String,
    },
   bio:{
    type: String,
    maxlength: 500
   },
   skills: {
    type: [String],
    maxlength: 10
   },
   experience: {
    type: [String],
    maxlength: 10
   }
})

const ApplicantModel=mongoose.models.Applicant as mongoose.Model<Applicant> || mongoose.model<Applicant>("Applicant",ApplicantScehma);
export default ApplicantModel;






