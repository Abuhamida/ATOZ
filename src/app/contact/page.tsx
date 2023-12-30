"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faEnvelope,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import data from "./data/Data";
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

interface IconProps {
  id: number;
  open: number;
}

  function Icon({ id, open }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  export default function contact() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(0);

    const handleOpen = (value:any) => setOpen(open === value ? 0 : value);

    return (
      <>
        <div className=" min-h-screen flex flex-col h-auto items-center pt-5">
          <div className=" flex breadcrumbs items-center text-lg py-5  mb-10">
            <ul>
              <li>
                <a href={"/"}>Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-10 flex-col items-center justify-center">
            <div className="flex gap-5 flex-wrap justify-center items-center">
              <div className="card w-72 bg-base-100 text-center shadow-xl ">
                <div className="card-body items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    size="4x"
                    color="#0e64b5"
                  ></FontAwesomeIcon>
                  <h2 className="card-title">Opening Hours :</h2>
                  <p>10:00AM to 10:00PM</p>
                </div>
              </div>
              <div className="card w-72 bg-base-100 text-center shadow-xl ">
                <div className="card-body items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="4x"
                    color="#0e64b5"
                  ></FontAwesomeIcon>
                  <h2 className="card-title">Phone :</h2>
                  <p>+201094835876</p>
                </div>
              </div>
              <div className="card  w-72  bg-base-100 text-center shadow-xl ">
                <div className="card-body items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="4x"
                    color="#0e64b5"
                  ></FontAwesomeIcon>
                  <h2 className="card-title">Email :</h2>
                  <p>atozprogramming.edu@gmail.com</p>
                </div>
              </div>
              <div className="card w-72 bg-base-100 text-center shadow-xl ">
                <div className="card-body items-center">
                <FontAwesomeIcon
                  icon={faMapLocation}
                  size="4x"
                  color="#0e64b5"
                ></FontAwesomeIcon>
                <h2 className="card-title">Address :</h2>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div className="card md:w-2/3 lg:w-1/3 bg-base-100 text-center shadow-inner  ">
            <div className="card-body items-center">
              <h2 className="card-title">Contact Us</h2>
              <form>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered border-solid w-full max-w-xs mb-5"
                />
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input input-bordered border-solid w-full max-w-xs mb-5"
                />
                <input
                  type="text"
                  placeholder="Enter phone"
                  className="input input-bordered border-solid w-full max-w-xs mb-5"
                />
                <textarea
                  className="textarea textarea-bordered border-solid w-full max-w-xs mb-5"
                  placeholder="Bio"
                ></textarea>
                <button type="submit" className="btn w-full max-w-xs mb-5">

                  Send
                </button>
              </form>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="mb-10 ">
            <h1 className="text-xl font-bold lg:text-3xl mb-5 text-center">
              Frequently Asked Questions
            </h1>
            <div className="grid grid-row lg:grid-cols-2 p-2 gap-4" dir="rtl">
              {data.map((item, index) => (
                <Accordion
                  key={item.id}
                  open={open === item.id}
                  icon={<Icon id={item.id} open={open}
                   />}
                >
                  <AccordionHeader onClick={() => handleOpen(item.id)} className=" text-right  ">
                  {/* {open==item.id?console.log(true):console.log(false) } */}
                    <h2 className= {` w-64 md:w-[32rem] ${open === item.id ? "text-[#0e64b5]" : " whitespace-nowrap overflow-hidden text-ellipsis" }`} >{item.ques}</h2>
                  </AccordionHeader>
                  <AccordionBody>
                    <p className=" md:w-3/4 pr-3">{item.ans}</p>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
