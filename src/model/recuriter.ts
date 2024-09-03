import mongoose,{Document,Schema} from "mongoose";

export interface Recuriter extends Document{
    name: string,
    userName: string,
    email: string,
    phone: string,
    password:string,
    company: string,
    linkedIn: string,
    
}

const RecuriterSchema: Schema<Recuriter> = new Schema({
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
     company:{
        type: String,
        required: [true,"Please enter Company Name"],
     },
     linkedIn:{
        type: String,
    }  
})

const RecuriterModel= mongoose.models.Recuriter as mongoose.Model<Recuriter> || mongoose.model<Recuriter>("Recuriter",RecuriterSchema);
export default RecuriterModel;



