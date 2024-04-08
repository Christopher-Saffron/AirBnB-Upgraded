import Header from "@/components/Header";
import { getSearchResults } from "@/lib/getSearchResults";
import { StarIcon, LightningBoltIcon } from "@heroicons/react/solid";

import Head from "next/head";
import React from "react";
import Image from "next/image";
import ImageViewer from "@/components/pageComponents/ImageViewer";
import { faker } from "@faker-js/faker";
import AdditionalTags from "@/components/pageComponents/AdditionalTags";
import MeetYourHost from "@/components/pageComponents/MeetYourHost";
import ShareSave from "@/components/pageComponents/ShareSave";
import WhatThisPlaceOffers from "@/components/pageComponents/WhatThisPlaceOffers";
import Reviews from "@/components/pageComponents/Reviews";
import LocationMap from "@/components/pageComponents/LocationMap";
import FooterPage from "@/components/pageComponents/FooterPage";
import Room from "@/components/pageComponents/Room";
import Reservation from "@/components/pageComponents/Reservation";
import NoSsr from "@/components/three-models/no-ssr";
import LoadModel from "@/components/three-models/LoadModel";

function Place({ result }) {
  return (
    <>
      <Head>
        <title>{result.title}</title>
      </Head>
      <div className="">
        <Header />
        <div className="mt-3 max-w-6xl mx-auto min-h-screen ">
          <div className="px-4">
            <h3 className="text-3xl mb-2">{result.title}</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
              <div className="flex items-center">
                <div className="flex items-center font-bold">
                  <StarIcon className="h-4 inline-block" />
                  {result.star}
                </div>
                <div className="bg-black h-1 w-1 rounded-full mx-3" />
                <div className="flex items-center italic underline">
                  {/* {Math.floor(Math.random() * 1000)} reviews */}
                  {result.reviews} reviews
                </div>
                <div className="bg-black h-1 w-1 rounded-full mx-3 hidden md:block" />
                <div className=" items-center text-gray-600 hidden md:flex">
                  <LightningBoltIcon className="h-4 inline-block" />
                  Superhost
                </div>
                <div className="bg-black h-1 w-1 rounded-full mx-3" />
                <div className="font-bold underline italic">
                  {result.location}
                </div>
              </div>
              <ShareSave link={result.google} />
            </div>
          </div>
          <ImageViewer img={result.img} />
          <div className="flex text-2xl font-semibold justify-start gap-8 w-full lg:w-1/2 px-4 items-center">
            <h2>Room hosted by {result.person.hostName}</h2>
            <div className="h-12 w-12 relative ">
              <Image
                src={result.person.avatarUrl}
                fill
                className=" rounded-full object-contain"
                alt=""
              />
            </div>
          </div>

          <div className=" mt-3 flex justify-center items-center gap-x-2 px-4 md:items-stretch flex-col md:flex-row">
            <div className=" pt-4 w-full flex-grow">
              <div className=" border-b border-gray-300 pb-6">
                <AdditionalTags flex={"row"} num={result.randomColsTags} />
                <AdditionalTags flex={"col"} num={result.randomRowTags} />
              </div>
              <MeetYourHost
                person={result.person}
                hostName={result.hostName}
                avatarUrl={result.avatarUrl}
              />
              <WhatThisPlaceOffers
                randomOffersArray={result.randomOffersArray}
              />
            </div>
            <div className=" w-fit mx-center mt-6 md:mt-0 md:w-full flex-grow max-w-[450px]">
              <Reservation
                info={{
                  price: result.price,
                  star: result.star,
                  reviews: result.reviews,
                  placeName: result.title,
                  placeHost: result.person.hostName,
                  img: result.img,
                }}
              />
            </div>
          </div>
          <Reviews
            star={result.star}
            reviews={result.reviews}
            commentsArray={result.commentsArray.results}
          />

          <LocationMap coords={{ lat: result.lat, long: result.long }} />
          <NoSsr>
            <LoadModel modelName={result.room} />
          </NoSsr>
        </div>
        <FooterPage />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const searchResults = await getSearchResults();
  const paths = searchResults.map((result) => ({
    params: { id: result.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const searchResults = await getSearchResults();
  const result = searchResults.find((result) => result.id === params.id);
  const randomNumberTags = [];
  const randomRowTags = [];
  const randomColsTags = [];
  while (randomRowTags.length < 3) {
    const randomNum = Math.floor(Math.random() * 8); // we have 8 random tags
    if (!randomNumberTags.includes(randomNum)) {
      randomNumberTags.push(randomNum);
      randomRowTags.push(randomNum);
    }
  }

  while (randomColsTags.length < 3) {
    const randomNum = Math.floor(Math.random() * 8); // we have 8 random tags
    if (!randomNumberTags.includes(randomNum)) {
      randomNumberTags.push(randomNum);
      randomColsTags.push(randomNum);
    }
  }

  const person = {
    hostName: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    jobTitle: faker.person.jobTitle(),
    zodiac: faker.person.zodiacSign(),
    email: faker.internet.email(),
    bio: faker.person.bio(),
  };

  const commentsFetch = await fetch("https://randomuser.me/api/?results=6");
  const commentsArray = await commentsFetch.json();

  const randomOffersArray = [];

  while (randomOffersArray.length < 6) {
    const randomNum = Math.floor(Math.random() * 17); // we have 17 random OFFERS
    if (!randomOffersArray.includes(randomNum)) {
      randomOffersArray.push(randomNum);
    }
  }

  const updatedResult = {
    ...result,
    commentsArray,
    randomOffersArray,
    randomColsTags,
    randomRowTags,
    person,
  };
  return { props: { result: updatedResult } };
};

export default Place;
