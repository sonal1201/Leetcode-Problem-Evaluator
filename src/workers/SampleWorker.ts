import { Job,Worker } from 'bullmq'
import redisConnection from '../config/redis.config';

import SampleJobs from '../jobs/SampleJobs';
// import { IJob } from '../types/bullMqJobDef'
// import { WorkerResponse } from '../types/bullMqWorkerResponse'

export default function SampleWorker(queueName: string){
    new Worker(
        queueName,
        async(job: Job)=>{
            if(job.name== "SampleJob"){
                const sampleJobInstance = new  SampleJobs(job.data);
                sampleJobInstance.handle(job)

                // return true;
            }
        },
        {
            connection: redisConnection
        }
    );
}