# Charon

Charon is an application for managing participants in in-person events.

The tool allows the organizer to register an event and open a public registration page.

Registered participants can issue a credential for check-in on the day of the event.

The system will scan the participant's credentials to allow entry to the event.

popular seed: npx prism db seed

# Requirements

### Functional requirements

- [x] The organizer must be able to register a new event;
- [x] The organizer must be able to view event data;
- [x] The organizer must be able to view the list of participants;
- [x] The participant must be able to register for an event;
- [x] The participant must be able to view their registration badge;
- [x] The participant must be able to check-in at the event;


### Business rules
 
  - [x] The participant can only register for an event once;
  - [x] Participants can only register for events with available places;
  - [x] The participant can only check in to an event once;

### Non-functional requirements
 
  - [] Check-in at the event will be carried out using a QRCode;

# Get Started

#### requirements

- [Node 20.x.x](https://nodejs.org/en)

### environment variables
`DATABASE_URL`

If you want to run SQLite, `DATABASE_URL = file:.dev.db`

### Installing

After clone run the command:

```
 npm install
```

run this command to create the Tables in Database

```
 npm run db:migrate

 # to view
 npm run db:studio
```

### To run the App

Run the command add access localhost:3333/docs to see the swagger in your browser. 
```
 npm run dev
```


# Technologies

- Node
- ORM Prisma
- Framework Fastify
- Typescript
