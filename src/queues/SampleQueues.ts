import { Queue } from "bullmq";
import redisConnection from "../config/redis.config";
// --> new Queue(Queue_Name)<-- new queue Syntax

export default new Queue('SampleQueue',{connection: redisConnection});