import { CardProjects } from "./CardProjects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux'



export const Projects = ({project}) => {

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
      <div className="py-10 text-center">
         <h3 className="md:text-6xl text-3xl uppercase font-bold">MY Projects <span className="text-blue-500">{projects.length}</span></h3>
      </div>
      <div className="container mx-auto flex items-center gap-3 flex-wrap justify-center">
        <Carousel 
          responsive={responsive}
          autoPlay={true} 
          autoPlaySpeed={3000} 
          className="w-full"
          itemClass="carousel-item-padding-10"
        >
          {
            projects.map((pro)=>{
              return(
                  <CardProjects pro={pro}/>
              )
            })
          }
        </Carousel>
      </div>
    </section>
    </>
  )
}
