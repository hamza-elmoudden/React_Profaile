import { CardProjects } from "./CardProjects";
import Carousel from "react-multi-carousel";

import "./Projects.css"
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux'
import {SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';





export const Projects = ({ project }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const projects = useSelector((state) => state.project[0])


  return (
    <>
      <section className="py-20" ref={project}>
       <div className="md:container w-[94%] mx-auto">
       <div className="py-10 text-center">
          <h3 className="md:text-6xl text-3xl uppercase font-bold">MY <span className="text-red-500">Projects {projects.length}</span></h3>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          className="w-full"
          itemClass="carousel-item-padding-10"
        >
          {
            projects.map((pro ,index) => {
              return (
                <SwiperSlide key={index} className="md:w-[25rem] w-[20rem] overflow-hidden md:h-[45rem] h-[30rem]">
                  <CardProjects pro={pro} />
                </SwiperSlide>
              )
            })
          }
        </Carousel>
       </div>
      </section>
    </>
  )
}




