import { FormValues } from "./formValues";
export interface User {
  id: number;
  name: string;
  email: string;
  image?: string;
  password: string;
  createdAt: string;
  resumes: FormValues[];
  customerId?: string;
  paymentPlan: PaymentPlan;
}

export enum PaymentPlan {
  Free,
  Standard,
  Premium,
}
