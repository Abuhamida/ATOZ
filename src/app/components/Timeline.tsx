import TimelineComponent from "./TimelineComponent";
export default function timeline() {
  return (
    <>
      <section className="rounded-md p-3 md:p-7 text-blue-gray-800 timeline-section flex flex-col items-center justify-center">
        <div className="pb-8 text-center md:w-3/4 lg:w-1/2">
          <h3 className="text-3xl md:text-4xl text-[#455a64]">
            What is Not Taught in School
          </h3>
          <h1 className="text-xl my-3">Future Technology Programming Curriculum</h1>
          <p className="text-sml">
            The Future Technology Programming Curriculum is designed for
            students aged 6 and is based on the Harvard University methodology.
            It is endorsed by major global institutions specializing in
            technical education and digital security for children. Each course
            is carefully developed to convey programming concepts through
            practical projects, not just theory, and takes into account
            differences in student levels. We start step by step with the
            student from scratch to professionalism.
          </p>
          <h3>The Beginning of the Journey to a Bright Future</h3>
        </div>
        <TimelineComponent />
        <div className="text-center">
          <h3 className=" text-2xl font-bold">Launch into the Professional World</h3>
          <h2>STEM.org Certified and Blockchain Verified Certificate</h2>
        </div>
      </section>
    </>
  );
}
