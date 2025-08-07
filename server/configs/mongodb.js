import mongoose, { mongo } from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', ()=> console.log('Database Connected Finally'))

    await mongoose.connect(`${process.env.MONGODB_URI}/beyondstudy`)
    
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
