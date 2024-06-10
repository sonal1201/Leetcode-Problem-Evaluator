
import SampleQueues from "../queues/SampleQueues";

export default async function(name:string, payload: Record<string,unknown>){
    await SampleQueues.add(name,payload)
}