import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import {z} from "zod";
import { prisma } from "../libs/prisma";

export async function getAttendeeBadge(app: FastifyInstance){
    app.withTypeProvider<ZodTypeProvider>().get('/attendees/:attendeeId/badge', {
        schema: {
            params: z.object({
                attendeeId: z.coerce.number().int(),
            }),
            response: {
                200: z.object({
                    name: z.string(),
                    email: z.string().email(),
                    eventTitle: z.string(),
                    checkInUrl: z.string().url()
                }),
                404: z.object({
                    message : z.string()
                })
            }
        }
    }, async (request, reply) => {

        const { attendeeId } =  request.params

        const attendee = await prisma.attendee.findUnique({
            where: {
                id: attendeeId
            },
            select: {
                name: true,
                email: true,
                event: {
                    select: {
                        title: true
                    }
                }
            }
        })

        if(attendee === null){
            return reply.status(404).send({message: 'Attendee not found.'})
        }

        const baseUrl = `${request.protocol}://${request.hostname}`
        request.url
        const checkInUrl = new URL(`/attendees/${attendeeId}/check-in`, baseUrl)

        return reply.send({
            name: attendee.name,
            email: attendee.email,
            eventTitle: attendee.event.title,
            checkInUrl: checkInUrl.toString(),
        })
    })
}