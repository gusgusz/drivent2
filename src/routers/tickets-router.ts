import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsByUser, getTicketsTypes, createTicket} from "@/controllers";
import { createEnrollmentSchema } from "@/schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/", getTicketsByUser)
  .post("/", validateBody(createEnrollmentSchema), createTicket)
  .get("/types", getTicketsTypes)

export { ticketsRouter };
