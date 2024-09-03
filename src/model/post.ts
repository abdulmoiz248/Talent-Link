import mongoose,{ Schema,Document } from "mongoose";

interface Post extends Document {
    title: string;
    content: string;
    recuriterId: string;
    applicantId: string[];
    skillsRequired: string[];
    validTill: Date;
    createdAt:Date;
}

const postSchema = new Schema<Post>({
    title:
    {
        type: String,
        required: [true,"Please select a title"]
    },
    content:{
        type: String,
        required: [true,"Please select a content"]
    },
    recuriterId:{
        type:String,
        required: [true,"Please select a recuriter"]
    },
    applicantId:{
        type: [String],
        default: []
    },
    skillsRequired:{
        type: [String],
        required: [true,"Please select skills required"]
    },
    validTill:{
        type: Date,
        required: [true,"Please select a date"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const PostModel= mongoose.models.Post as mongoose.Model<Post> || mongoose.model<Post>("Post",postSchema);

export default PostModel;