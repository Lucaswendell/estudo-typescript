import config from "config";
import mongoose from "mongoose";

async function connect(){
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        console.log("Conectou ao banco");
    } catch (e: any) {
        console.error("Não foi possivel fazer a conecção");
        console.error("Erro: " + e.message)
    }
}

export default connect;