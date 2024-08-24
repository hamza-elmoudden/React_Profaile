import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot,faAt } from '@fortawesome/free-solid-svg-icons';



export const Footer = () => {
  return (
    <>
    <footer className="py-10 container mx-auto">
        <div className="flex gap-4 md:flex-row flex-col px-2">
            <div className="md:w-1/2 w-full flex gap-7  flex-col">
                <div className="p-4 rounded-full bg-red-600 cursor-pointer w-fit">
                    <FontAwesomeIcon className="text-2xl text-white" icon={faMapLocationDot}/>
                </div>
                <div className="text-2xl uppercase flex gap-4 flex-wrap">
                    <h3>Address : </h3>
                    <h3>RUE 03 NR 14 SIDI BELKASS TOUDANT</h3>
                </div>
            </div>
            <div className="md:w-1/2 w-full flex gap-7  flex-col">
                <div className="p-4 rounded-full bg-red-600 cursor-pointer w-fit">
                    <FontAwesomeIcon className="text-2xl text-white" icon={faAt}/>
                </div>
                <div className="text-2xl uppercase flex  gap-4 flex-wrap">
                    <h3>Email : </h3>
                    <h3>elmouddane@codehamza.com</h3>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

