import mongoose from 'mongoose';
import 'dotenv/config';
import console from 'console';

const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI).then(() => console.log('Database server running'));

export default connectToDatabase;