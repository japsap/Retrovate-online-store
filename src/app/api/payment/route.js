import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_PRICE_KEY)

export const POST = async (req, res) => {
    const body = await req.json()


    const customer = await stripe.customers.create({
        metadata: {
            userId: body.userId
        }
    })

    const line_items = body.cart.map((item) => {
        return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            quantity: 1,
          };
    })


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["BG"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 0,
                currency: "usd",
              },
              display_name: "Free shipping",
              // Delivers between 5-7 business days
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 5,
                },
                maximum: {
                  unit: "business_day",
                  value: 7,
                },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 1500,
                currency: "usd",
              },
              display_name: "Next day air",
              // Delivers in exactly 1 business day
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 1,
                },
                maximum: {
                  unit: "business_day",
                  value: 1,
                },
              },
            },
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        line_items,
        mode: "payment",
        customer: customer._id,
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cart`,
      });

      console.log(req.json());

      return new Response(JSON.stringify({ url: session.url }))
}


export const GET = async (req, res) => {
  const paymentIntents = await stripe.paymentIntents.list({
    limit: 10,
  });

  const customerPurchaseHistory = await stripe.paymentIntents.retrieve({
    
  })

  return new Response({ paymentIntents })
}