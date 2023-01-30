import { AuthenticatedRequest } from "@/middlewares";
import paymentsService from "@/services/payments-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getPaymentByUserId(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const payment = await ticketsService.getPaymentByUserId(userId);
    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}



export async function updatePayment(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { payment } = req.body;
    try {
        await ticketsService.updatePayment(userId, payment);
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}