
import { urlFor } from '../Sanity/Client'


export const CardProjects = ({pro}) => {

    const githup = () => {
        window.open(`${pro.code}`, '_blank');
    };

    const live = () => {
        window.open(`${pro.view}`, '_blank');
    };

    console.log("image:",pro ? pro.title : "")
  return (
    <>
    <section className="w-full md:min-w-1/3 h-[45rem] p-5  border border-spacing-1  flex flex-col gap-8 rounded-lg">
        <div className="space-y-3">
            <h3 className="text-3xl capitalize font-bold">{pro ? pro.title :"Tittle"}</h3>
            <p className="line-clamp-2">{pro ? pro.description :"description"}</p>
        </div>
        <div className='h-[30rem] w-full overflow-hidden'>
            <img src={urlFor(pro.mainImage.asset._ref)} className='rounded-lg w-full h-full  transition duration-300 transform hover:scale-125 z-30' alt="Card" />
        </div>
        <div className="flex py-1 px-5 justify-between">
            <div className=" cursor-pointer py-4 px-5 rounded-xl bg-blue-500 uppercase font-bold hover:text-green-500 hover:bg-white" onClick={githup}>
                <a>Show Code In githup</a>
            </div>
            <div className=" cursor-pointer py-4 px-5 rounded-xl bg-blue-500 uppercase font-bold hover:text-green-500 hover:bg-white" onClick={live}>
                <a>Show Live</a>
            </div>
        </div>
    </section>
    </>
  )
}
