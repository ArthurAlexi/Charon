import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../libs/prisma";

export async function checkIn(app :FastifyInstance) {
    
    app.withTypeProvider<ZodTypeProvider>().get('/attendees/:attendeeId/check-in', {
        schema: {
            summary: 'Get check-in',
            tags: ['check-in'],
            params: z.object({
                attendeeId: z.coerce.number().int(),
            }),
            response:{
                200: z.object({
                    checkInId: z.number().int()
                }),
                404: z.object({
                    message : z.string()
                })
            }
        }
    }, async (request, reply)=> {
        const { attendeeId } = request.params

        const attendeeCheckIn = await prisma.checkIn.findUnique({
            where: {
                attendeeId: attendeeId
            }
        })

        if(attendeeCheckIn !== null){
            return reply.status(404).send({message: 'Attendee already ckecked in.'})
        }

        const new_checkIn = await prisma.checkIn.create({
            data: {
                attendeeId,
            }
        })

        return reply.status(201).send({checkInId: new_checkIn.id})
    })
}