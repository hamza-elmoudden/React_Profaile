
import { urlFor } from '../Sanity/Client'


export const CardProjects = ({pro}) => {

    const githup = () => {
        window.open(`${pro.code}`, '_blank');
    };

    const live = () => {
        window.open(`${pro.view}`, '_blank');
    };

  return (
    <>
    <section className="w-full h-full p-5  border border-spacing-1 border-red-600  flex flex-col md:gap-8 gap-4 rounded-lg">
        <div className="md:space-y-3 space-y-0 h-[5rem]">
            <h3 className="md:text-3xl text-xl capitalize font-bold">{pro ? pro.title :"Tittle"}</h3>
            <p className="line-clamp-2">{pro ? pro.description :"description"}</p>
        </div>
        <div className='h-[30rem] w-full overflow-hidden'>
            <img src={urlFor(pro.mainImage.asset._ref)} className='rounded-lg w-full h-full  transition duration-300 transform hover:scale-125 z-30' alt={pro.title && "Card"} />
        </div>
        <div className="flex py-1 px-2 md:px-5 justify-between md:flex-row  md:gap-4 gap-4 items-center flex-wrap">
            <div className="left-0 cursor-pointer  rounded-xl  uppercase font-bold hover:text-red-500  w-fit" onClick={githup}>
                <div >Show Code In githup</div>
                <div className=" w-full h-[2px] bg-red-600  rounded-full"></div>
            </div>
            <div className="right-0 cursor-pointer md:py-4 py-2 px-3 md:px-5 rounded-xl  uppercase font-bold hover:text-red-500  w-fit" onClick={live}>
                <div className="text-red-600 hover:text-white">Show Live</div>
                <div className=" w-full h-[2px] bg-white rounded-full"></div>
            </div>
        </div>
    </section>
    </>
  )
}
