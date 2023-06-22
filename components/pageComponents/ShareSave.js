import React, { useState, useEffect } from "react";
import { HeartIcon, UploadIcon } from "@heroicons/react/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

function ShareSave({ link, id }) {
  const [shareBox, toggleShareBox] = useState(false);
  const [copiedNotif, toggleCopiedNotif] = useState(false);
  const [liked, toggleLiked] = useState(false);
  const router = useRouter();

  ///DEFAULT CHECK IF USER LIKED THE PLACE
  useEffect(() => {
    if (!sessionStorage.getItem("likedPlaces")) {
      return;
    }

    if (
      sessionStorage.getItem("likedPlaces").split(",").includes(router.query.id)
    ) {
      toggleLiked(true);
    }
  }, []);

  const shareLink = () => {
    toggleShareBox(true);
  };

  const copyLink = (link, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link);
    toggleShareBox(false);
    toggleCopiedNotif(true);
  };

  const closeShareBox = (e) => {
    e.stopPropagation();
    toggleShareBox(!shareBox);
  };

  const likePage = (e) => {
    e.stopPropagation();
    if (sessionStorage.getItem("likedPlaces")) {
      const newArr = sessionStorage.getItem("likedPlaces").split(",");
      ///ADD IF IT'S NOT LIKED
      if (!newArr.includes(router.query.id)) {
        newArr.push(router.query.id);
        sessionStorage.setItem("likedPlaces", newArr);
        toggleLiked(true);
        ///DELETE IF ALREADY LIKED
      } else {
        newArr.splice(newArr.indexOf(router.query.id), 1);
        sessionStorage.setItem("likedPlaces", newArr);
        toggleLiked(false);
      }
    } else {
      sessionStorage.setItem("likedPlaces", router.query.id);
      toggleLiked(true);
    }
  };

  return (
    <>
      <div className="flex gap-3 select-none self-end mt-3 md:mt-0">
        <div
          className="flex gap-1 items-center cursor-pointer underline"
          onClick={shareLink}
        >
          <UploadIcon className="h-6 w-6" />
          <span>Share</span>
        </div>
        <div
          className="flex gap-1 items-center cursor-pointer underline"
          onClick={likePage}
        >
          {liked ? (
            <FilledHeartIcon className="h-6 w-6 text-red-500  heartAnim" />
          ) : (
            <HeartIcon className="h-6 w-6" />
          )}
          <span>Save</span>
        </div>
      </div>
      {shareBox && (
        <div
          className="fixed  top-0 left-0 z-50 w-screen h-screen"
          style={{ background: "rgba(0,0,0,0.3)" }}
          onClick={(e) => {
            closeShareBox(e);
          }}
        >
          <div
            className="border  shadow-xl bg-gray-200 flex flex-col rounded-lg  h-fit w-fit -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-1/3 transform absolute fromBottom"
            onClick={likePage}
          >
            <div
              className="flex flex-col bg-gray-200 p-5 relative"
              style={{ zIndex: 25 }}
            >
              <div
                onClick={(e) => {
                  copyLink(`${window.location.origin}${router.asPath}`, e);
                }}
                className=" py-3 text-xl flex items-center gap-3 cursor-pointer hover:text-red-500 hover:underline underline-offset-4"
              >
                <div className="h-6 w-6  relative">
                  <Image
                    src="/copy.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Link to this website:</p>
                <p className="italic text-gray-600">{`${window.location.origin}${router.asPath}`}</p>
              </div>
              <div
                onClick={(e) => {
                  copyLink(link, e);
                }}
                className=" border-t border-gray-300 py-3 text-xl flex items-center gap-3 cursor-pointer hover:text-red-500 hover:underline underline-offset-4"
              >
                <div className="h-6 w-6  relative">
                  <Image
                    src="/copy.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-semibold">Link to google maps:</p>
                <p className="italic text-gray-600">Click here</p>
              </div>
            </div>
            <div
              onClick={() => {
                toggleShareBox(false);
              }}
              className="absolute bg-red-300 bg-gradient-to-t from-red-700 to-red-300  transition transform duration-200 h-full top-0 -right-9 hover:-right-12 hover:px-5 rounded-r-2xl font-bold text-2xl text-white cursor-pointer border flex px-3 flex-col items-center justify-center"
              style={{ zIndex: 20 }}
            >
              X
            </div>
          </div>
        </div>
      )}

      {copiedNotif && (
        <div
          className="copiedNotif"
          onAnimationEnd={() => {
            toggleCopiedNotif(false);
          }}
        >
          Link copied!
        </div>
      )}
    </>
  );
}

export default ShareSave;
