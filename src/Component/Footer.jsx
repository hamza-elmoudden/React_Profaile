import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot,faAt } from '@fortawesome/free-solid-svg-icons';



export const Footer = () => {
  return (
    <>
    <footer className="py-10 container mx-auto">
        <div className="flex gap-4 md:flex-row flex-col px-2">
            <div className="md:w-1/2 w-full flex gap-7  items-center">
                <div className=" p-4 md:p-10 rounded-full bg-blue-600 cursor-pointer">
                    <FontAwesomeIcon className="md:text-6xl text-2xl text-white" icon={faMapLocationDot}/>
                </div>
                <div className="md:text-3xl uppercase flex flex-col gap-4">
                    <h3>Address</h3>
                    <h3>RUE 03 NR 14 SIDI BELKASS TOUDANT</h3>
                </div>
            </div>
            <div className="md:w-1/2 w-full flex gap-9 items-center">
                <div className=" p-4 md:p-10 rounded-full bg-blue-600 cursor-pointer">
                    <FontAwesomeIcon className="md:text-6xl text-2xl text-white" icon={faAt}/>
                </div>
                <div className="md:text-3xl uppercase flex flex-col gap-4">
                    <h3>Email</h3>
                    <h3>elmouddane@codehamza.com</h3>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

