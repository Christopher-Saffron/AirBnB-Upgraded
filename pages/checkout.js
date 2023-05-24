import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout({info}) {
  const [sessionId, setSessionId] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }], fullPrice: info.fullPrice }),
      });

      const data = await response.json();
      setSessionId(data.sessionId);
    };

    fetchData();
  }, []);

  const handleClick = async () => {
    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Checkout</button>
    </div>
  );
}