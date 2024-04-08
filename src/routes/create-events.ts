import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { prisma } from "../libs/prisma"

export async function createEvent(app: FastifyInstance) {
    
    app.post('/events', async (request, reply)=> {
        const createEventBody = z.object({
            title: z.string().min(4),
            details: z.string().nullable(),
            maximumAttendees: z.number().int().positive().nullable()
        })
        
        const {title, details, maximumAttendees} = createEventBody.parse(request.body)

        const new_event =  await prisma.event.create({
            data: {
                title,
                details,
                maximumAttendees,
                slug: new Date().toISOString(),
            },
        })

        return reply.status(201).send({ "eventId": new_event.id })
    })
}