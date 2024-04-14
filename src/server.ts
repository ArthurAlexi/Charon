import fastify from "fastify"
import { createEvent } from "./routes/create-events"
import { getEvent } from "./routes/get-event"
import { registerForEvent } from "./routes/register-for-event"
import { getAttendeeBadge } from "./routes/get-attendee-badge"
import { checkIn } from "./routes/check-in"
import { getEventAttendees } from "./routes/get-event-attendees"

const app = fastify()

app.get('/', ()=> {
    return 'Hello World.'
})

app.register(createEvent)
app.register(getEvent)
app.register(registerForEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)

app.listen({
    port: 3333
})
.then(()=>{
    console.log("HTTP Server running in PORT: 3333!")
})