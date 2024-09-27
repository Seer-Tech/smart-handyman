{/* Imports */}
import Image from "next/image";

{/* Images */}
import service1 from './images/services/1.png';
import service2 from './images/services/2.png';
import service3 from './images/services/3.png';
import service4 from './images/services/4.png';
import service5 from './images/services/5.png';
import service6 from './images/services/6.png';


export default function Services() {
    return (
        <>
            <div className="mx-auto mx-w-full bg-white pb-10 md:pb-0 pt-10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 bg-white flex flex-col sm:text-start"> 
                    <p className="text-red-500 font-ox font-medium text-lg w-fulll items-center mx-auto">PLEASE SELECT ONE</p>
                    <p className="text-red-800 font-ox font-medium text-4xl lg:text-5xl text-center">Our Services</p>
                </div>
                <div className="mx-auto max-w-7xl bg-white columns-1 md:columns-3 flex flex-col md:block justify-center px-2 sm:px-6 lg:px-0 pt-5 md:pt-0 md:py-10 w-72 sm:w-auto space-y-5 md:space-y-0 pb-5 md:pb-0"> 
                    <Image src={service1} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                    <Image src={service2} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                    <Image src={service3} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                </div>
                <div className="mx-auto max-w-7xl bg-white columns-1 md:columns-3 flex flex-col md:block justify-center items-center px-2 sm:px-6 lg:px-0  pb-5 md:pb-0 md:py-10 text-center w-72 sm:w-auto space-y-5 md:space-y-0"> 
                    <Image src={service4} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                    <Image src={service5} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                    <Image src={service6} alt="handyman" width={343.25} height={160} className="mx-auto"/>
                </div>
            </div>
        </>
    )
}