import { SearchIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import HeaderMenu from "./HeaderMenu";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();

  // const searchWithEnter = (e) => {
  //   if (e.key !== "Enter" || !searchInput) return;

  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       guestNumber,
  //     },
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", searchWithEnter);
  //   return () => window.removeEventListener("keydown", searchWithEnter);
  // }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const search = () => {
    console.log(searchInput);
    // if (!searchInput) return;
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
    setSearchInput("");
    // router.reload();
    // if (router.pathname === "/search") router.reload(window.location.pathname);
  };

  const resetInput = (e) => {
    setSearchInput("");
  };

  return (
    <header className="sticky  top-0 z-[101] bg-white mx-auto shadow-md p-5 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative flex items-center h-16 cursor-pointer my-auto"
        >
          <Image
            src="/NipponAirLogo.svg"
            style={{ objectPosition: "left", objectFit: "contain" }}
            fill
            alt=""
          />
        </div>

        <div className="flex overflow-hidden items-center md:border-2 rounded-full py-2 md:shadow-sm min-w-[0px] md:min-w-[250px]">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder={placeholder || "Search"}
            value={searchInput}
            className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
            type="text"
          />
          <SearchIcon
            onClick={() => {
              search();
            }}
            className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
          />
        </div>

        <div className="flex items-center justify-end text-gray-500">
          {/* <p className="hidden lg:inline-block cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" /> */}

          <HeaderMenu />
        </div>

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-10 headerSearch">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={guestNumber}
                onChange={(e) => setGuestNumber(e.target.value)}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex justify-center gap-5">
              <button
                onClick={resetInput}
                className=" text-white px-6 py-3 rounded-lg bg-red-500 bg-gradient-to-t from-red-500 to-red-300 transition duration-200 ease-out hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={search}
                className=" text-white font-bold px-6 py-3 rounded-lg bg-red-500 bg-gradient-to-t from-red-700 to-red-500 transition duration-200 ease-out hover:scale-105"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
