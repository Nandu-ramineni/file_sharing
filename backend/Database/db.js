import mongoose from 'mongoose'

const DBConnection = async () => {
    const URI=`mongodb://user:qcO6AaDblyzgRMCa@ac-acu65sw-shard-00-00.hng0fkz.mongodb.net:27017,ac-acu65sw-shard-00-01.hng0fkz.mongodb.net:27017,ac-acu65sw-shard-00-02.hng0fkz.mongodb.net:27017/?ssl=true&replicaSet=atlas-tesny0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file`
    try {
        await mongoose.connect(URI)
        console.log('Db connected successfully');
    } catch (error) {
        console.log('Error while connecting to db:',error.message);
    }
}
export default DBConnection;