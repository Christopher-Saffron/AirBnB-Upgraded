import Footer from "@/components/Footer";
import Header from "@/components/Header.tsx";
import { useRouter } from "next/router";
import React from "react";
import PayPalButton from "@/components/checkoutForm/PaypalButton";
import Image from "next/image";
import CheckoutForm from "@/components/checkoutForm/CheckoutForm";

function Payment() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <main className="flex flex-col max-w-screen-xl min-h-screen relative  mx-auto overflow-hidden">
        <div className="mx-center text-center text-3xl font-bold mt-6">
          Payment for:
        </div>

        <div className="flex flex-col px-3 md:px-0 items-center md:flex-row  justify-center md:items-stretch gap-4">
          <div className="flex-grow w-full md:max-w-[350px] h-full">
            <div className="mx-auto max-w-[600px] h-full  font-semibold w-full p-3 border rounded-lg text-sm mt-3 shadow-lg">
              <div className="relative h-48 sm:h-64">
                <Image
                  src={router.query.img}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-3">
                <div>
                  <span className="text-[#FD5B61]">Place:</span>{" "}
                  {router.query.placeName}
                </div>
                <div>
                  <span className="text-[#FD5B61]">Host:</span>{" "}
                  {router.query.placeHost}
                </div>
                <div>
                  <span className="text-[#FD5B61]">First Day:</span>{" "}
                  {router.query.dateStart}
                </div>
                <div>
                  <span className="text-[#FD5B61]">Last Day:</span>{" "}
                  {router.query.dateEnd}
                </div>
                <div className="text-base pt-2 mt-2 border-t border-gray-300">
                  Total:{" "}
                  <span className="font-bold">
                    {router.query.fullPrice} PLN
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow w-full  md:max-w-[350px]">
            <div className="mx-auto max-w-[600px] text-[#6772E5] font-semibold w-full p-3 border rounded-lg text-xs my-3 shadow-lg">
              Stripe's test account info:
              <p>
                Email: <span className="text-gray-700 italic">any</span>
              </p>
              <p>Card information: 4242 4242 4242 4242</p>
              <p>04/24 424</p>
              <p>
                Name on card: <span className="text-gray-700 italic">any</span>
              </p>
            </div>

            <div className=" my-3 max-w-[600px] px-6 min-h-[300px] mx-auto w-full  font-semibold p-3 border rounded-lg text-sm mt-3 shadow-lg">
              <CheckoutForm info={router.query} />
              <PayPalButton info={router.query} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Payment;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
