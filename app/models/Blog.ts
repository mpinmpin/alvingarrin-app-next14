import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        }
    }, {
    timestamps: true
}
)


const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default Blog