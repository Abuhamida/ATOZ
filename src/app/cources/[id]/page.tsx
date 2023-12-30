/* eslint-disable react/no-unescaped-entities */
"use client";
import data from "@/app/cources/data/data";
import Image from "next/image";

export default function course({
  params,
}: {
  params: { id: number | string };
}) {
  const course = data.find((course) => course.id === Number(params.id));
  const courseInfo = course?.data.course_info as
    | string
    | {
        Understanding: string;
        A_Brief_History: string;
        The_Future: string;
        Conclusion: string;
        info:string;
      };
  return (
    <div className="  flex flex-col items-center bg-[#64b5f6] w-full ">
      <div className=" w-screen grid place-items-center  ">
        <Image
          src={require(`@/images/${course?.data.imgName}`)}
          alt=""
          className="w-screen h-96 rounded-3xl"
        />
      </div>
      <div className=" shadow-md mb-5 h-full bg-[#d7e8ff] p-5 md:w-3/4 w-5/6 min-h-[900px] -mt-56 flex flex-col justify-center rounded-2xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center text-[#102e46]">
          {course?.data.name}
        </h1>
        <p className=" px-2 md:px-10 md:text-xl">
       {typeof courseInfo === 'string' ? courseInfo : courseInfo.info}

        </p>
        <h2 className="md:text-2xl md:pl-5 font-bold py-3 text-left">Understanding </h2>
        <p className=" md:pl-5 md:text-xl">
          
        &nbsp;&nbsp;&nbsp;{typeof courseInfo === 'string' ? courseInfo : courseInfo.Understanding}
        </p>
        <h2 className="md:text-2xl md:pl-5 font-bold py-3 text-left">
          A Brief History of VR
        </h2>
        <p className=" md:pl-5 md:text-xl">
        &nbsp;&nbsp;&nbsp;{typeof courseInfo === 'string' ? courseInfo : courseInfo.A_Brief_History}

        </p>
        <h2 className="md:text-2xl md:pl-5 font-bold py-3 text-left">The Future of VR</h2>
        <p className=" md:pl-5 md:text-xl">
        &nbsp;&nbsp;&nbsp;{typeof courseInfo === 'string' ? courseInfo : courseInfo.The_Future}
        </p>
        <h2 className="md:text-2xl md:pl-5 font-bold py-3 text-left">Conclusion</h2>
        <p className=" md:pl-5 md:text-xl">
        &nbsp;&nbsp;&nbsp;{typeof courseInfo === 'string' ? courseInfo : courseInfo.Conclusion}
        </p>
      </div>
    </div>
  );
}
