import { prisma } from "@/config";
import { Payment } from "@prisma/client";


async function createPayment(payment: Payment) {
    return prisma.payment.create({
        data: payment,
    });
}

async function getPaymentByUserId(id: number) {
    return prisma.payment.findUnique({
        where: {
            id,
        },
    });
}

async function getPaymentByEnrollmentId(id: number) {
    return prisma.payment.findUnique({
        where: {
            id,
        },
    });
}

async function getPaymentByTicketId(id: number) {
    return prisma.payment.findUnique({
        where: {
            id,
        },
    });
}

async function updtatePayment(id: number, payment: Payment) {
    return prisma.payment.update({
        where: {
            id,
        },
        data: payment as Payment,
    });
}


const paymentsRepository = {
    createPayment,
    getPaymentByUserId,
    getPaymentByEnrollmentId,
    getPaymentByTicketId,
    updtatePayment,
}

export default paymentsRepository;