import { prisma } from '../libs/prisma';
import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { ZodTypeProvider } from "fastify-type-provider-zod";

export async function registerForEvent(app: FastifyInstance){

    app.withTypeProvider<ZodTypeProvider>().post('/events/:eventId/attendees',{
        schema: {
            summary: 'Register an attendee',
            tags: ['attendees'],
            body: z.object({
                name: z.string().min(4),
                email: z.string().email(),
            }),
            params: z.object({
                eventId: z.string().uuid(),
            }),
            response: {
                201: z.object({
                    attendeeId: z.number()
                }),
                400: z.object({
                    message: z.string()
                }),
            },
        }
    }, async (request, reply)=> {

        const {eventId} = request.params
        const {name, email} = request.body

        const event = await prisma.event.findUnique({
            where: {
                id: eventId
            },
            include: {
                attendees: true
            }
        })

        if(event === null)
            return reply.status(400).send({message: "Event not found."})

        if(event.attendees.find(attende => attende.email === email))
            return reply.status(400).send({message: "Attendee alredy registered."})

        if(event?.maximumAttendees && event.maximumAttendees === event.attendees.length) 
            return reply.status(400).send({message: "the maximum number of participants has already been reached."})

        const new_attendee = await prisma.attendee.create({
            data: {
                name,
                email,
                eventId
            }
        })

        return reply.status(201).send({attendeeId: new_attendee.id})
    })

}