"use client";
import { useState, useEffect } from "react";
import { Timelinedata } from "./Timelinedata";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Image from "next/image";
export default function TimelineComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const timelineElement = document.querySelector(".timeline-section");

      if (timelineElement) {
        const timelineRect = timelineElement.getBoundingClientRect();
        const timelineTop = timelineRect.top + scrollY;
        const timelineBottom = timelineTop + timelineRect.height;

        // Check if the timeline is within the viewport
        if (scrollY >= timelineTop && scrollY <= timelineBottom) {
          const maxScrollHeight = timelineRect.height - window.innerHeight;
          const newScrollPosition =
            ((scrollY - timelineTop) / maxScrollHeight) * 100;

          // Ensure the scroll position does not exceed 100%
          const clampedScrollPosition = Math.min(100, newScrollPosition);
          setScrollPosition(clampedScrollPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const intermediaryBalls = Timelinedata.length;
  const current = Math.round((scrollPosition / 100) * intermediaryBalls - 0.5);

  const style = {
    height: `${scrollPosition}%`,
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <section className="ag-section">
      <div className="ag-format-container">
        <div className="js-timeline ag-timeline">
          <div className="js-timeline_line ag-timeline_line">
            <div
              className="js-timeline_line-progress ag-timeline_line-progress"
              style={style}
            ></div>
          </div>
          <div className="ag-timeline_list">
            {Timelinedata.map((item, index) => (
              <div
                key={item.id}
                className="js-timeline_item js-ag-animated ag-timeline_item p-0"
              >
                <div
                  className="ag-timeline-card_item min-h-16 h-96 lg:h-80 flex p-0 flex-col justify-center items-center lg:p-5"
                  data-aos="fade-up" 
                >
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_img-box flex flex-col items-center">
                      <Image src={require(`@/images/${item.data.img}`)} alt="" className="ag-timeline-card_img w-40"/>
                    </div>
                    <div
                      className="ag-timeline-card_info text-left  p-0"
                      dir="ltr"
                    >
                      <div className="ag-timeline-card_title">
                        {item.data.h1}
                      </div>
                      <div className="ag-timeline-card_desc p-0 ">
                        {item.data.pargraph}
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow"></div>
                </div>
                <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                  <div
                    className={`ag-timeline-card_point  ${
                      current >= index ? "js-ag-active" : ""
                    }`}
                  ></div>
                </div>
                <div className="ag-timeline-card_meta-box ">
                  <div className="ag-timeline-card_meta">{item.data.h1}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:items-center js-timeline-card_point-box ag-timeline-card_point-box">
            <div
              className={`ag-timeline-card_point z-10 ${
                current >= Timelinedata.length ? "js-ag-active" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
