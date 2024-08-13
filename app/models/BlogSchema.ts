import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
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


const BookModel = mongoose.models.BookModel || mongoose.model("BookModel", BlogSchema)

export default BookModel