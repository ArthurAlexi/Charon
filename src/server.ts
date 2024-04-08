import fastify from "fastify"
import { createEvent } from "./routes/create-events"

const app = fastify()

app.get('/', ()=> {
    return 'Hello World.'
})

app.post('/', (request, reply)=> {
    request.body
})

app.register(createEvent)

app.listen({
    port: 3333
})
.then(()=>{
    console.log("HTTP Server running in PORT: 3333!")
})