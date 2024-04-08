import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { getExploreNearby } from "@/lib/getExploreNearby";
import SmallCard from "@/components/SmallCard";
import { getCardsData } from "@/lib/getCardsData";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Home({ exploreData, cardsData }) {
  const router = useRouter();

  const searchWithTag = () => {
    router.push({
      pathname: "/search",
      query: {
        location: "",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        guestNumber: 1,
      },
    });
  };

  return (
    <div className="">
      <Head>
        <title>HavirBnB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((i, index) => (
              <SmallCard
                key={i.id}
                id={i.id}
                img={i.img}
                distance={i.distance}
                location={i.location}
              />
            ))}
          </div>
        </section>

        <section className="relative">
          <h2 className="text-4xl font-bold pb-5">Live Anywhere</h2>
          <div className="relative">
            <div className="relative flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map((i, index) => (
                <MediumCard
                  searchWithTag={searchWithTag}
                  key={index}
                  img={i.img}
                  title={i.title}
                />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-5 bg-gradient-to-r from-transparent to-white" />
          </div>
        </section>

        <LargeCard
          img="/greatestoutdoors.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
          link="/search?location=&startDate=2024-04-08T09%3A03%3A04.114Z&endDate=2024-04-08T09%3A03%3A04.114Z&guestNumber=1"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await getExploreNearby();

  const cardsData = await getCardsData();

  return {
    props: { exploreData, cardsData },
  };
}
