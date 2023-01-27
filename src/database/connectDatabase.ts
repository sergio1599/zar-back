import mongoose from "mongoose";


mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(`Could not connect to MongoDB: ${err.message}`));

export { mongoose };

/* mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Conexion correcta BD'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

module.exports = mongoose; */