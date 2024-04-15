import {prisma} from '../src/libs/prisma'

async function seed() {
    const new_event = await prisma.event.create({
        data: {
            id: 'a57dfd40-dd0c-4213-be55-1aa4b5e183ef',
            title: 'Web Summit',
            slug: 'Web-Summit',
            details: 'Initially called an Education Seminar, the event contributes to the educational market by providing directors and supporters with a suitable space for discussion, innovation and updates on education and school management.',
            maximumAttendees: 20
        }
    })

    
}

seed().then(()=> { 
    console.log('Database seeded.')
    prisma.$disconnect()
})