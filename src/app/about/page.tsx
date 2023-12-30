"use client";
import Image from "next/image";
import A_img from "@/images/about-img.jpg";
import Reviews from "./componete/Reviews";
import { Role } from "./componete/data";
export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex breadcrumbs items-center text-lg py-5  mb-10">
          <ul>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:w-3/4">
          <div className="md:flex ">
            <div className="md:shrink-0 md:w-1/2">
              <Image
                className="h-48 w-full  object-cover md:h-full "
                src={A_img}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm  font-semibold">
                About US <span className="text-[#64b5f6]">/</span>
              </div>

              <p className="mt-2 text-slate-500">
                ATOZ is an educational organization that offers a variety of
                educational programs targeting children between the ages of 6
                and 18. This organization focuses on teaching children
                programming and artificial intelligence (AI) concepts, aiming to
                provide them with valuable knowledge and skills in these areas.
                Through its diverse range of courses and programs, ATOZ strives
                to empower children to excel in technology-related fields and
                become well-prepared for the challenges of the digital age.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center justify-center md:flex-row lg:flex-row">
          {Role.map((role) => (
            <div
              key={role.id}
              className="lg:w-1/2  h-96 border-solid flex flex-col gap-5 items-center justify-center bg-blue-50  border-2 border-blue-200 rounded-xl m-5  hover:bg-blue-300 hover:text-white "
            >
              <Image
                src={require("@/images/" + role.data.img)}
                alt=""
          
                className=" w-32"
              />
              <h3 className="text-3xl">{role.data.title} </h3>
              <div className="w-[270px] px-1 lg:w-96 text-lg text-center lg:px-3">
                <p>{role.data.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" pt-5 text-3xl font-bold"> Our Students Review</h1>
          <Reviews />
        </div>
      </div>
    </>
  );
}
