//ENV variables
require('dotenv').config();

import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

//DB
import db from "../config/db";

//Middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);

//Routers
import router from "./router";
app.use("/api/", router);


//logger
import Logger from "../config/logger";


//app port
const port = config.get<Number>("port");

app.listen(port, async () => {
    await db();
    Logger.info(`porta ${port}`);
})