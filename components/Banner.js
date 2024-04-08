import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const IMAGES = [
  "/banner5.jpg",
  "/banner2.jpg",
  "/banner4.jpg",
  "/banner3.jpg",
  "/banner1.jpg",
  "/banner6.jpg",
  "/banner7.jpg",
];

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
    <div className=" relative   h-[500px]  lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
      <Carousel
        className=" w-full select-none  relative h-[500px]  lg:h-[500px] xl:h-[600px] 2xl:h-[700px] "
        relative
        border
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
        {IMAGES.map((item) => (
          <div className=" bannerDiv" key={item}>
            <Image
              className=""
              src={item}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 border-2  p-3  border-white transform  -translate-y-1/2 -translate-x-1/2 w-1/2 max-w-[600px]  rounded-xl lg:rounded-full text-center bg-red-500 bg-gradient-to-t from-red-700 to-red-500 shadow-black shadow-2xl">
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
