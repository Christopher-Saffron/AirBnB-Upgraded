"use client";

import { GlobeAltIcon, SearchIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import HeaderMenu from "@/components/HeaderMenu.tsx";

interface SelectionRangeProps {
  [key: string]: {
    startDate: Date;
    endDate: Date;
    key: string | undefined;
  };
}

interface HeaderProps {
  placeholder: string;
}

function Header({ placeholder }: HeaderProps) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();
  const handleKeyDown = (e: KeyboardEvent): void => {
    console.log(e.key);

    if (e.key === "Enter" || searchInput) {
      console.log("bonk");
      search();
    }
    // switch (e.key) {
    //   case "Enter": {
    //     if (searchInput) {
    //       console.log("i clicked enter and it had input", searchInput);

    //       search();
    //     }
    //     return;
    //   }
    //   case "Escape": {
    //     if (searchInput) resetInput();
    //   }
    //   default: {
    //     return;
    //   }
    // }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectionRange: SelectionRangeProps = {
    selection: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  };

  ////// FIX THIS SelectionRangeProps
  function handleSelect({ selection }: any): void {
    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  }

  const search = () => {
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
    // if (router.pathname === "/search") router.reload();
  };

  const resetInput = (): void => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-[101] bg-white mx-auto shadow-md p-5 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
            style={{ objectPosition: "left", objectFit: "contain" }}
            fill
            alt=""
          />
        </div>

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder={placeholder ? placeholder : "Start your search"}
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

        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden lg:inline-block cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <HeaderMenu />
        </div>

        {searchInput && (
          <div className="border border-red-500 mx-auto absolute top-full bg-white w-full left-0">
            <div className="flex flex-col col-span-3 border border-blue-500 justify-center items-center mx-auto mt-10 headerSearch">
              <DateRangePicker
                ranges={[selectionRange.selection]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={(selection) => handleSelect(selection)}
              />
              <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">
                  Number of Guests
                </h2>
                <UsersIcon className="h-5" />
                <input
                  value={guestNumber}
                  onChange={(e) => setGuestNumber(parseInt(e.target.value, 10))}
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
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
