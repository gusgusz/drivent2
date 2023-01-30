
import { getAddress } from "@/utils/cep-service";
import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import { exclude } from "@/utils/prisma-utils";
import { Address, Enrollment } from "@prisma/client";
import { Ticket, TicketType } from "@prisma/client";

async function  getTicketsTypes(){
    const  tickets = await ticketsRepository.getTicketsTypes();
    if(!tickets) throw notFoundError();
    return tickets;
}

async function  getTicketByUserId(id: number) {
    const ticket = await ticketsRepository.getTicketByUserId(id);
    if(!ticket) throw notFoundError();
    return ticket;
}

async function  createTicket(userId: number, ticket: Ticket) {
    const  newTicket = await ticketsRepository.createTicket(ticket);
    if(!newTicket) throw notFoundError();
    return newTicket;
}

const ticketsService = {
    getTicketsTypes,
    getTicketByUserId,
    createTicket,
}

export default ticketsService;