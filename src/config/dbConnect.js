import mongoose from "mongoose"
async function conectaNaDatabase(){ 
mongoose.connect(process.env.DB_CONNEXTION_STRING); //precisa ser assincrona

return mongoose.connection;
}


export default conectaNaDatabase;