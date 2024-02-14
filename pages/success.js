import Footer from "@/components/Footer";
import Header from "@/components/Header.tsx";
import { useRouter } from "next/router";
import React from "react";
import { getSearchResults } from "@/lib/getSearchResults";

function Search() {
  const router = useRouter();
  return (
    <div>
      <Header />
      success from {router.query?.from}
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
