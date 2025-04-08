import mongoose from "mongoose"
async function conectaNaDatabase(){ 
mongoose.connect(process.env.DB_CONNECTION_STRING); //precisa ser assincrona

return mongoose.connection;
}


export default conectaNaDatabase;