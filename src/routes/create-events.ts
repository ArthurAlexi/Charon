import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../libs/prisma"
import { generateSlug } from "../utils/generate-slug"

export async function createEvent(app: FastifyInstance) {
    
    app.withTypeProvider<ZodTypeProvider>().post('/events', {
        schema: {
            summary: 'Create an event',
            tags: ['events'],
            body: z.object({
                title: z.string().min(4),
                details: z.string().nullable(),
                maximumAttendees: z.number().int().positive().nullable()
            }),
            response: {
                201: z.object({
                    eventId: z.string().uuid(),
                }),
                400: z.object({
                    message: z.string()
                })
            }
        }
    } ,async (request, reply)=> {
        
        const {title, details, maximumAttendees} = request.body
        const slug = generateSlug(title)

        const eventWithSameSlug = await prisma.event.findUnique({
            where: {
                slug
            }
        })

        if(eventWithSameSlug !== null){
            return reply.status(400).send({"message": "event already created."})
        }

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