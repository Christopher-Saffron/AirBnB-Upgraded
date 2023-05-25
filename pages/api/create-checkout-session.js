const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

////Just forming a query and making it more visible
const queryForm = (info) => {
  let startQuery = ``
  for (const item in info) {
    startQuery += `&${encodeURIComponent(item)}=${encodeURIComponent(info[item])}`;
  }
  return startQuery
}


export default async function handler(req, res) {
  const { items, info } = req.body;

  const infoJSON = queryForm(info);


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'pln',
          unit_amount: calculateOrderAmount(info.fullPrice),
          product_data: {
            name: 'Travel and Hotel expenses',
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.HOST}processPayment?${infoJSON}`,
    // success_url: newLink,
    cancel_url: `${process.env.HOST}cancel`,
  });

  res.send({
    sessionId: session.id,
  });
}

const calculateOrderAmount = (fullPrice) => {
  ///due to the numbers looking slightly scary in size, for whatever reason, 
  ///instead of multiplying by 100, 
  ///i'm going to make sure the numbers are rather smaller than what they should be
  return Number(fullPrice) * 1;
};
