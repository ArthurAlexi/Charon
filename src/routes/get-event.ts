import { FastifyInstance } from "fastify";
import {z} from 'zod';
import { prisma } from "../libs/prisma";

export async function getEvent(app: FastifyInstance) {
    
    app.get('/event', async (request, reply)=> {
        const getEventParams = z.object({
            eventId: z.string().uuid()
        })

        const { eventId } = getEventParams.parse(request.params)

        const event = prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        if(event == null)
            return reply.status(404).send({ 'message': 'Event nol found.' })

            return reply.status(200).send(event)
    })

}