import { Job } from "bullmq"

import { IJob } from "../types/bullMqJobDef";

export default class SampleJobs implements IJob{
    name:  string;
    payload:  Record<string, unknown>;
    constructor(payload: Record<string, unknown>){
        this.payload = payload;
        this.name= this.constructor.name; 
    }

    handle = (job?: Job)=> {
        console.log("Handler of job called");
        if(job){
            console.log(job);
            console.log(job.name,job.id,job.data);
        }
    }

    failed = (job?: Job) : void=> {
        console.log("Job failed");
        if(job){
            console.log(job.id);
        }
    }

}