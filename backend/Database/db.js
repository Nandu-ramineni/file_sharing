import mongoose from 'mongoose'

const DBConnection = async () => {
    const URI=`URI`
    try {
        await mongoose.connect(URI)
        console.log('Db connected successfully');
    } catch (error) {
        console.log('Error while connecting to db:',error.message);
    }
}
export default DBConnection;
