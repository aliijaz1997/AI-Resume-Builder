// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.SECRET_KEY as string, {
//   apiVersion: "2023-10-16",
// });

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = params;
//     const user = await prisma.user.findUnique({
//       where: { id: Number(id) },
//     });
//     if (user && !user.customerId) {
//         const newCustomer = await stripe.customers.create({
//             email: user.email,
//             description: 'Valueable customer of PM App',
//             payment_method: stripeTokenId,
//           });
//           await this.prismaService.customer.create({
//             data: {
//               description: newCustomer.description,
//               email: newCustomer.email,
//               id: newCustomer.id,
//             },
//           });
//       return NextResponse.json({ message: "No resume" }, { status: 404 });
//     }

//     return NextResponse.json(
//       {
//         user,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error getting resume:", error);
//     return NextResponse.json(
//       { error: "Could not get resume" },
//       { status: 500 }
//     );
//   }
// }
