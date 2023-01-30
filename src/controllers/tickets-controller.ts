import { AuthenticatedRequest } from "@/middlewares";
import ticketsService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getTicketsByUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  
  try {
    const tickets = await ticketsService.getTicketByUserId(userId);
    return res.status(httpStatus.OK).send(tickets);
  }
  catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response){
    try {
        const ticketsTypes = await ticketsService.getTicketsTypes();
    
        return res.status(httpStatus.OK).send(ticketsTypes);
    } catch (error) {
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const userId = Number(req.userId);
  const { ticket} = req.body;
  

  try {
    await ticketsService.createTicket(
      userId,
      ticket,
    );
    return res.status(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
