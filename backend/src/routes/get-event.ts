import { FastifyInstance } from "fastify";
import {z} from 'zod';
import { prisma } from "../libs/prisma";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export async function getEvent(app: FastifyInstance) {
    
    app.withTypeProvider<ZodTypeProvider>().get('/events/:eventId', {
        schema: {
            summary: 'Get event',
            tags: ['events'],
            params: z.object({
                eventId: z.string().uuid()
            }),
            response: {
                200: z.object({
                    eventId: z.string().uuid(),
                    title: z.string(),
                    slug: z.string(),
                    details: z.string().nullable(),
                    maximumAttendees: z.number().int().nullable(),
                    attendeesAmount: z.number().int(),
                }),
                404: z.object({
                    message: z.string()
                }),
            }
        },
    }, async (request, reply)=> {

        const { eventId } = request.params

        const event = await prisma.event.findUnique({
            select: {
                id: true,
                title: true,
                details: true,
                slug: true,
                maximumAttendees: true,
                _count: {
                    select: {
                        attendees: true
                    }
                }
            },
            where: {
                id: eventId,
            },
            
        })

        if(event === null){
            console.log('CAIU AQUI');
            
            return reply.status(404).send({ message: 'Event nol found.' })
        }

            return reply.send({ 
                eventId: event.id,
                title: event.title,
                slug: event.slug,
                details: event.details,
                maximumAttendees: event.maximumAttendees,
                attendeesAmount: event._count.attendees
             })
    })

}