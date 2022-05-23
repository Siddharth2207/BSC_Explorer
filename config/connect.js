const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://root1:Admin123@cluster0.gcvmi.mongodb.net/Explorer?authSource=admin&replicaSet=atlas-xbgo9f-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
                
            }
        );

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
