"use client";
import Slide1 from "@/images/home-slide-1.jpg";
import Slide2 from "@/images/zz.png";

import Image from "next/image";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Main() {
  return (
    <Carousel transition={{ duration: 1 }} className=" mt-5 h-[400px] sm:h-[800px]  ">
      <div className="relative h-full w-full">
        <Image
          src={Slide1}
          
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-3xl lg:text-4xl"
            >
              Welcome To ATOZ
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm md:text-2xl "
            >
              An educational institution for teaching children programming and
              artificial intelligence from ages 6 to 18.
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="text"
                className="flex items-center gap-2"
                color="white"
              >
                <Link href={"/about"}>About</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={Slide2}
        
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
          <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-3xl lg:text-4xl"
            >
              Welcome To ATOZ
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm md:text-2xl "
            >
              An educational institution for teaching children programming and
              artificial intelligence from ages 6 to 18.
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="text"
                className="flex items-center gap-2"
                color="white"
              >
                <Link href={"/about"}>About</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
