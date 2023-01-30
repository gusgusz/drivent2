import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { postProcessPayment, getPaymentInfoById} from "@/controllers";
import { createEnrollmentSchema } from "@/schemas";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPaymentInfoById)
  .post("/process", postProcessPayment)


export { paymentsRouter };
