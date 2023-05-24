const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const y = {
//   placeName: 'shibuya',
//   placeHost: 'Jayda',
//   fullPrice: '1000'
// }

const queryForm = (info) => {
  console.log(info)
  // let startQuery = `${process.env.HOST}processPayment?`
  let startQuery = ``
  for (const item in info) {
    console.log(item, info[item]);
    startQuery += `&${encodeURIComponent(item)}=${encodeURIComponent(info[item])}`;
    console.log(startQuery);
  }
  console.log(startQuery)
  return startQuery
}

// queryForm(y)

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
  // Replace this with your own calculation of the order's amount
  // Calculate the order total on the server to prevent manipulation
  return Number(fullPrice) * 1;
};

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// // const y = {
// //   placeName: 'shibuya',
// //   placeHost: 'Jayda',
// //   fullPrice: '1000'
// // }

// const queryForm = (items) => {
//   let startQuery = `${process.env.HOST}processPayment?`
//   for (const item in items) {
//     console.log(item, items[item])
//     startQuery += `&${item}=${items[item]}`
//     console.log(startQuery)
//   }
//   return startQuery
// }

// // queryForm(y)

// export default async function handler(req, res) {
//   const { items, info } = req.body;
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'pln',
//           unit_amount: calculateOrderAmount(info.fullPrice),
//           product_data: {
//             name: 'Travel and Hotel expenses',
//           },
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: queryForm(info),
//     cancel_url: `${process.env.HOST}cancel`,
//   });

//   res.send({
//     sessionId: session.id,
//   });
// }

// const calculateOrderAmount = (fullPrice) => {
//   // Replace this with your own calculation of the order's amount
//   // Calculate the order total on the server to prevent manipulation
//   return Number(fullPrice) * 1;
// };