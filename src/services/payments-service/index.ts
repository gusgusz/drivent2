
import { getAddress } from "@/utils/cep-service";
import { notFoundError } from "@/errors";
import paymentsRepository from "@/repositories/payments-repository";
import { exclude } from "@/utils/prisma-utils";
import { Address, Enrollment } from "@prisma/client";
import { Ticket, TicketType } from "@prisma/client";

async function getPaymentByUserId(id: number) {
    const payment = await paymentsRepository.getPaymentByUserId(id);
    if (!payment) throw notFoundError();
    return payment;
}

async function updatePayment(id: number, payment: Payment) {
    const updatedPayment = await paymentsRepository.updatePayment(id, payment);
    if (!updatedPayment) throw notFoundError();
    return updatedPayment;
}

async function createPayment(payment: Payment) {
    const newPayment = await paymentsRepository.createPayment(payment);
    if (!newPayment) throw notFoundError();
    return newPayment;
}

const paymentsService = {
    getPaymentByUserId,
    updatePayment,
    createPayment,
 
}

export default paymentsService;