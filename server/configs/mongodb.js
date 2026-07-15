import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return

  mongoose.connection.on('connected', () => console.log('Database Connected Finally'))
  mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error.message))

  try {
    const mongoUri = process.env.MONGODB_URI
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined')
    }

    const normalizedUri = mongoUri.includes('/beyondstudy') ? mongoUri : `${mongoUri}/beyondstudy`
    await mongoose.connect(normalizedUri)
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    throw error
  }
}

export default connectDB
