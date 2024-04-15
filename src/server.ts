import fastify from "fastify"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import {validatorCompiler, serializerCompiler, jsonSchemaTransform} from 'fastify-type-provider-zod'

import { createEvent } from "./routes/create-events"
import { getEvent } from "./routes/get-event"
import { registerForEvent } from "./routes/register-for-event"
import { getAttendeeBadge } from "./routes/get-attendee-badge"
import { checkIn } from "./routes/check-in"
import { getEventAttendees } from "./routes/get-event-attendees"


const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)
app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'Caronte',
            description: 'API documentation',
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

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