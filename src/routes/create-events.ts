import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { prisma } from "../libs/prisma"
import { generateSlug } from "../utils/generate-slug"

export async function createEvent(app: FastifyInstance) {
    
    app.post('/events', async (request, reply)=> {
        const createEventBody = z.object({
            title: z.string().min(4),
            details: z.string().nullable(),
            maximumAttendees: z.number().int().positive().nullable()
        })
        
        const {title, details, maximumAttendees} = createEventBody.parse(request.body)
        const slug = generateSlug(title)

        const new_event =  await prisma.event.create({
            data: {
                title,
                details,
                maximumAttendees,
                slug
            },
        })

        return reply.status(201).send({ "eventId": new_event.id })
    })
}