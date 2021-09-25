import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, 
    )

    console.log(`MongoBD Connected: ${conn.connection.host}`.cyan)
  } catch (error) {
    console.error(`Error: ${error.message}`.yellow)
    process.exit(1)
  }
}

export default connectDB
