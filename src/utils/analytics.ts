import { redis } from "@/lib/redis";


export class Analytics {

    async register(pagename: String, date: String) {
        var registryExists = await redis.hgetall(`${pagename}::${date}`)
        console.log(registryExists)
        if(!registryExists?.counter){
            await redis.hset(`${pagename}::${date}`, {counter: 1})
            return
        }

        if (
            typeof registryExists === "object" &&
            registryExists &&
            "counter" in registryExists &&
            typeof registryExists.counter === "string"
          ) {
            registryExists.counter = String(1 + parseInt(registryExists.counter))
          }
        
          await redis.hset(`${pagename}::${date}`, registryExists)
    }
}

export const analytics = new Analytics()