"use client";

import Image from "next/image";
import Rating from "./Rating";
import A_per from "@/images/per.png";
import { Review } from "./data";
import { Carousel } from "@material-tailwind/react";

export default function Reviews() {
  return (

    <>
      <Carousel
        className="rounded-xl w-full md:max-w-3xl h-72 md:h-80 lg:h-72 "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
          {Review.map((review) => (
        <div className=" flex flex-col items-center justify-center" key={review.id}>
          <p className="w-2/3 lg:w-2/5 py-3 p-1 lg:px-5 my-2 text-sm rounded-md text-white bg-[#64b5f6] text-center">
            {review.review}
          </p>
          <Image
            src={A_per}
            alt=""
          
            className="rounded-box h-20 w-20"
          />
          <h1 className="">{review.name}</h1>
          <Rating rating={review.rating} />
        </div>
      ))}
      </Carousel>
    </>
  );
}
