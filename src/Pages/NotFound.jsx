
import { faBan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        navigate("/"); 
      }, 3000); 
  
      return () => clearTimeout(redirectTimeout); 
    }, [navigate]);

  return (
    <>
        <section className="h-[100vh] w-full flex justify-center pt-[10rem]">
                <div className="w-[40rem] h-[40rem] space-y-10 text-center">
                    <div className='text-6xl font-bold uppercase'>
                        <h1>Page Not Found</h1>
                    </div>
                    <div className='text-6xl text-blue-700 font-bold'>
                        <FontAwesomeIcon icon={faBan} />
                    </div>
                    <div className="text-5xl uppercase">
                        Thank you for visiting
                    </div>
                </div>
        </section>
    </>
  )
}
