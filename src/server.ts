import fastify from "fastify"
import { createEvent } from "./routes/create-events"
import { getEvent } from "./routes/get-event"
import { registerForEvent } from "./routes/register-for-event"

const app = fastify()

app.get('/', ()=> {
    return 'Hello World.'
})

app.register(createEvent)
app.register(getEvent)
app.register(registerForEvent)


app.listen({
    port: 3333
})
.then(()=>{
    console.log("HTTP Server running in PORT: 3333!")
})