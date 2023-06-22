import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  const router = useRouter();

  const flexibleSearch = () => {
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
    <div className=" relative h-screen  sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Carousel
        className=" w-full select-none border relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        useKeyboardArrows={false}
        emulateTouch={false}
        stopOnHover={false}
        swipeable={false}
        transitionTime={2000}
      >
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/bannerjapan.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/banner03.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/banner06.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/banner07.jpeg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/banner08.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" relative h-screen sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            className=""
            src="/bannerjapan.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel>
      <div className="absolute top-1/2 left-1/2 border-2  p-3  border-white transform -translate-y-1/2 -translate-x-1/2 w-1/2 md:w-1/3 rounded-xl lg:rounded-full text-center bg-red-500 bg-gradient-to-t from-red-700 to-red-500 shadow-2xl">
        <p className="text-lg sm:text-xl md:text-2xl  font-bold  text-white">
          Not sure where to go? Perfect.
        </p>
        <button
          onClick={() => {
            flexibleSearch();
          }}
          className="text-red-500 bg-white px-3 py-3 md:px-10 md:py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl transition duration-150 active:scale-90"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
