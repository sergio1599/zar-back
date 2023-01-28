import mongoose from "mongoose";

const mongoConnection = {
    isConnected: 0
}


mongoose.set("strictQuery", false);
/* mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(`Could not connect to MongoDB: ${err.message}`));

export { mongoose }; */



export const connect = async () => {

    if (mongoConnection.isConnected) {
        console.log('Ya estabamos conectados');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if (mongoConnection.isConnected === 1) {
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL);
}

export const disconnect = async () => {

    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    console.log('Desconectado de MongoDB');
}