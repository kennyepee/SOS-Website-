import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    const { amount, frequency, email } = await request.json()

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: "A valid donation amount is required." },
        { status: 400 }
      )
    }

    const amountInCents = Math.round(amount * 100)

    if (frequency === "monthly") {
      const customer = await stripe.customers.create({
        email: email || undefined,
        metadata: { source: "sos-donate-page" },
      })

      const price = await stripe.prices.create({
        unit_amount: amountInCents,
        currency: "usd",
        recurring: { interval: "month" },
        product_data: {
          name: `SOS Monthly Donation — $${amount}/mo`,
        },
      })

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        payment_behavior: "default_incomplete",
        payment_settings: {
          save_default_payment_method: "on_subscription",
        },
        expand: ["latest_invoice.payment_intent"],
        metadata: { source: "sos-donate-page" },
      })

      const invoice = subscription.latest_invoice as any
      const paymentIntent = invoice.payment_intent

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        type: "subscription",
      })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      receipt_email: email || undefined,
      automatic_payment_methods: { enabled: true },
      metadata: {
        source: "sos-donate-page",
        donor_email: email || "",
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      type: "payment",
    })
  } catch (err: any) {
    console.error("Stripe error:", err)
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    )
  }
}
