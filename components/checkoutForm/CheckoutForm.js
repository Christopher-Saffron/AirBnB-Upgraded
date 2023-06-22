import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm({ info }) {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "Travel expenses" }], info }),
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
    <div
      onClick={handleClick}
      className="w-full  py-3 rounded-sm text-center  mb-4 bg-[#6772E5] cursor-pointer hover:bg-[#5460db]"
    >
      <div className="mx-auto w-fit">
        <Image src="/stripeLogo.png" alt="" height={40} width={60} />
      </div>
    </div>
  );
}
