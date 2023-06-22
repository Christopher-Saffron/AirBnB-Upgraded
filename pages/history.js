import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSearchResults } from "@/lib/getSearchResults";
import Travel from "@/models/Travel";
import dbConnect from "@/lib/dbConnect";
import Account from "@/models/Account";
import { getSession } from "next-auth/react";
import HistoryItem from "@/components/HistoryItem";

function Search({ travels }) {
  return (
    <div>
      <Header />
      <main className="flex flex-col max-w-screen-2xl min-h-screen relative  mx-auto overflow-hidden">
        <p className="font-semibold italic text-3xl text-center my-5 text-gray-700">
          Your travel history
        </p>
        <div className="flex flex-col gap-3 mx-auto min-h-[400px] px-5 w-full max-w-screen-lg mb-5">
          {travels.map((travel) => (
            <div key={travel._id}>
              <HistoryItem travel={travel} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  await dbConnect();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const account = await Account.findOne({ email: session.user.email }).populate(
    "travels"
  );

  const travels = account.travels.map((travel) => {
    const travelData = travel.toObject();

    travelData._id = travelData._id.toString();
    travelData.dateStart = travelData.dateStart.toISOString();
    travelData.dateEnd = travelData.dateEnd.toISOString();

    return travelData;
  });

  return { props: { travels } };
}
