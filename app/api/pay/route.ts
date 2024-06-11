// API route: api/pay
import { mollieClient } from "@/lib/mollieClient";
import { NextResponse } from "next/server";



export async function GET(request: Request) {

  try {
    const payment = await mollieClient.payments.create({
      amount: {
        value:    '14.95',
        currency: 'EUR', 
 
      },
      description: 'Eenmalige betaling voor',
      redirectUrl: 'http://127.0.0.1:3000/success',
    });

    console.log(payment.getCheckoutUrl());

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}


