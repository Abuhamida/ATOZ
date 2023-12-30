"use client";

import Image from "next/image";

const certified = [
  { name: "Certified Course 1", image: "111.png" },
  { name: "Certified Course 2", image: "5.png" },
  { name: "Certified Course 3", image: "1.png" },
  { name: "Certified Course 4", image: "11.png" },
  { name: "Certified Course 5", image: "10.png" },
  { name: "Certified Course 6", image: "8.png" },
];
import { useState, useEffect } from 'react';
export default function Certified() {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down or up
      if (window.scrollY > 200) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Add smooth scrolling
    });
  }

  return (
    <>
      <div className="flex flex-col gap-5 my-28 items-center justify-center text-center ">
        <div className="">
          <h1 className="text-3xl font-bold">Certified Courses</h1>
          <p className="text-lg">
            We offer a wide range of certified courses for kids.
          </p>
        </div>
        <div className="flex md:gap-10 flex-wrap w-3/4 items-center justify-center ">
          {
            certified.map((course) => (
                <div className="relative" key={course.name}>
                <Image src={require(`@/images/${course.image}`)} // Load the image dynamically
                    alt="card-image"
                    className="w-16 md:w-32"
                  />
                </div>
            ))
          }
        </div>
        <button
      onClick={scrollingDown ? scrollToTop : scrollToBottom}
      className=" fixed bottom-5 right-5 bg-white btn btn-circle animate-bounce z-10"
    >
      {scrollingDown ? '↑' : '↓'}
    </button>
      </div>
    </>
  );
}
