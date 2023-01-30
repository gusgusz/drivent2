import { prisma } from "@/config";
import { Ticket } from "@prisma/client";

async function getTicketsTypes() {
    return prisma.ticketType.findMany();
}

async function getTicketByUserId(id: number) {
    return prisma.ticketType.findUnique({
        where: {
            id,
        },
    });

}

async function createTicket(ticket: Ticket) {
    return prisma.ticket.create({
        data: ticket,
    });
}


const ticketsRepository = {
    getTicketsTypes,
    getTicketByUserId,
    createTicket,
}

export default ticketsRepository;