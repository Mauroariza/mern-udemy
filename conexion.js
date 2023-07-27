import mongoose from 'mongoose';  

mongoose.connect('mongodb://localhost:27017/crudmernstack');
const objetobd = mongoose.connection;

objetobd.on('connected', () => {   
    console.log('Mongoose is connected');
});
objetobd.on('error', (err) => {    
    console.log('Mongoose default connection error: ' + err);
});

export default mongoose;