const mongoos = require('mongoose')


const connectDB = async () => {
    const conn = await mongoos.connect(process.env.MONGO_URL, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }, 6000000);

console.log(`MongoDB connected:${conn.connection.host}`);
};

module.exports = connectDB