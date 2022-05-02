import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

async function connect(){
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Conectou ao banco");
    } catch (e: any) {
        Logger.error("Não foi possivel fazer a conecção");
        Logger.error("Erro: " + e.message);
        process.exit(1)
    }
}

export default connect;