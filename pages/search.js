import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { getSearchResults } from "@/lib/getSearchResults";
import InfoCard from "@/components/InfoCard";
import MapComponent from "@/components/Map";

const FILTER_TAGS = [
  "Entire Homes",
  "Outdoor getaways",
  "Pet allowed",
  "Unique homes",
  "Hidden treasure",
];

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestNumber, tagToFilter } =
    router.query;
  const [filterTags, setFilterTags] = useState([]);

  const handleFilters = (filter) => {
    if (filterTags.indexOf(filter.target.innerHTML) === -1) {
      filter.target.classList.add("bg-red-200");
      setFilterTags((prevState) => [...prevState, filter.target.innerHTML]);
    } else {
      setFilterTags((prevState) =>
        prevState.filter((item) => item !== filter.target.innerHTML)
      );
      filter.target.classList.remove("bg-red-200");
    }
  };

  useEffect(() => {
    if (tagToFilter) {
      setFilterTags([tagToFilter]);
      document
        .querySelector(`[data-tag="${tagToFilter}"]`)
        .classList.add("bg-red-200");
    }
  }, []);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} = ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestNumber} guests`} />
      <main className="flex flex-col max-w-screen-2xl min-h-screen relative  mx-auto overflow-hidden">
        <section className="mt-6 hidden md:inline-flex h-[350px] relative shadow-lg">
          <div className="h-full w-full lg:h-auto shadow-lg rounded-lg relative">
            <MapComponent searchResults={searchResults} />
          </div>
        </section>

        <section className="flex-grow pt-14 px-6 w-full">
          <p className="text-xs">
            300+ Stays for {guestNumber} number od guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {FILTER_TAGS.map((item) => (
              <button
                key={item}
                onClick={handleFilters}
                data-tag="Entire Homes"
                className="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            {searchResults
              .filter((item) =>
                filterTags.every((val) => item.tags.includes(val))
              )
              .map(
                (
                  { img, location, title, description, star, price, id, tags },
                  i
                ) => (
                  <InfoCard
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    tags={tags}
                    star={star}
                    price={price}
                    id={id}
                    key={i}
                  />
                )
              )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await getSearchResults();

  return {
    props: {
      searchResults,
    },
  };
}
