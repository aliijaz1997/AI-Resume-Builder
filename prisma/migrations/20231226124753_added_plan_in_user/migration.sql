-- CreateEnum
CREATE TYPE "PaymentPlan" AS ENUM ('Free', 'Standard', 'Premium');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paymentPlan" "PaymentPlan" NOT NULL DEFAULT 'Free';
