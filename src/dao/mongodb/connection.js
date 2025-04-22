import {connect} from 'mongoose';
import 'dotenv/config';

export const initMongoDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        throw new Error(error);
    }
};