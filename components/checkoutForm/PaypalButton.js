// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { useRef } from "react";

const initialOptions = {
  "client-id": "test",
  currency: "PLN",
};

export default function PaypalButton({ info }) {
  const router = useRouter();
  const divRef = useRef();

  const approve = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
      router.push("/success?from=paypal");
    });
  };

  return (
    <div className="relative">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: info.fullPrice / 100,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
              router.push({
                pathname: "/processPayment",
                query: {
                  ...info,
                },
              });
            });
          }}
        />
      </PayPalScriptProvider>
      <div
        ref={divRef}
        className="aaaaaaaaaaaa w-full h-full absolute top-0 left-0 text-xs  z-[100] text-white font-semibold rounded-lg"
        style={{ background: "rgba(0,0,0,.9" }}
      >
        <div className="absolute top-1/2 left-1/2 -mt-2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p>
            Do not use real accounts. This component isn't fully connected even
            to a sandbox paypal. Anything paid could be sent into void.
          </p>
          <p className="text-red-400 underline underline-offset-3">
            Only use with test/fake accounts.
          </p>
          <button
            onClick={() => {
              divRef.current.classList.add("hidden");
            }}
            className="mt-3 border px-3 py-1 rounded-lg bg-gray-900 cursor-pointer hover:bg-gray-800"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
