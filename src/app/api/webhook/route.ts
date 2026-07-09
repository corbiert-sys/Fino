import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import { sendPurchaseEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: "Non configure" }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const productId = session.metadata?.productId;
    const customerEmail =
      session.customer_details?.email || (session.customer_email as string);

    if (!productId || !customerEmail) {
      return NextResponse.json({ received: true });
    }

    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json({ received: true });
    }

    try {
      await sendPurchaseEmail(
        customerEmail,
        session.customer_details?.name || null,
        product,
        ""
      );
    } catch (err) {
      console.error("Erreur envoi email:", err);
    }
  }

  return NextResponse.json({ received: true });
}
