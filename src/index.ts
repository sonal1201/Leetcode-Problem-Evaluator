import express from "express"

import serverConfig from "./config/server.config";
import SampleQueueProducers from "./Producers/SampleQueueProducers";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app = express();

app.use('/api',apiRouter)

app.listen(serverConfig.PORT,()=>{
    console.log(`Listening to port ${serverConfig.PORT}`);

    SampleWorker('SampleQueue')

    SampleQueueProducers('SampleJob',{
        name: "Sonal Singh",
        Company: "Google",
        Role: "Backend Developer"
    })
})