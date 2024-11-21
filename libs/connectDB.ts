import mongoose from "mongoose";


// This is preferably a server component, so we don't use react hooks here like useState
let isConnected = false

const connectDB = async() => {

	const DataBaseUrl = process.env.MONGODB_URI

	if (!DataBaseUrl) {
			throw new Error("Database URL not Defined")
	}

	if (isConnected) {
		console.log("Already Connected")
		return
	}
	
	
		try {
			await mongoose.connect(DataBaseUrl)
			console.log("Connected to DB")
			isConnected = true
		} catch (error) {
			console.log(error)  
		}
}
export default connectDB