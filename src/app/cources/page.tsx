"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Courses from "./data/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock } from "@fortawesome/free-solid-svg-icons";

export default function cv() {
  let path = "";
  return (
    <>
      <div className="flex flex-col gap-10 items-center lg:p-10">
        <div className="flex flex-col items-center gap-5 justify-center text-center mb-10">
          <div className=" flex breadcrumbs items-center text-lg ">
            <ul>
              <li>
                <a href={"/"}>Home</a>
              </li>
              <li>Courses</li>
            </ul>
          </div>
          <h1 className=" text-2xl font-light">
            Our courses are designed to help you build up your skills, gain
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 ">
          {Courses.map((course) => (
            <Card className="mt-6 w-auto max-w-sm h-[29rem] " key={course.id}>
              <CardHeader color="blue-gray" className="relative h-56">
                <Image
                  src={require(`@/images/${course.data.imgName}`)} // Load the image dynamically
                  alt="card-image"
                  className="h-56 w-96"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {course.data.name}
                </Typography>
                <Typography>{course.data.about}</Typography>
                <Link className="btn bg-blue-600 text-white mt-5" href={`cources/${course.id}`}>
                  Read More
                </Link>
              </CardBody>
              <CardFooter className="pt-0 flex-col gap-10 justify-center items-center">
                <div className=" bg-blue-gray-800 h-1 rounded-md w-full mb-2"></div>
                <div className="flex justify-between">
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faBook}
                      color="#031944"
                      className="mr-2"
                    />
                    <h4>{course.data.levels}Levels</h4>
                  </div>
                  <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      color="#031944"
                      className="mr-2"
                    />
                    <h4>{course.data.hours}Hours</h4>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
