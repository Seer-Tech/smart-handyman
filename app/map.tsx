{/* Imports */}
import Image from "next/image";

{/* Images */}
import add from './images/map/add.png';
import ph from './images/map/ph.png';
import em from './images/map/em.png';
import map from './images/map/map.png';


export default function Map() {
    return (
        <>
            <div className="mx-auto mx-w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8 bg-white flex flex-col text-start">
                        {/* Title Block */}
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 bg-white flex flex-col sm:text-start items-center md:items-start"> 
                            <p className="text-red-600 font-ox font-medium text-sm md:text-md lg:text-lg w-full text-center">REACH OUT</p>
                            <p className="text-red-800 font-ox font-medium text-4xl lg:text-5xl">Contact Information</p>
                        </div>

                        {/* Map Block */}
                        <div className="hidden md:flex justify-center w-full">
                            <Image src={map} alt="map" width={1000} height={500} className="w-full"/>
                        </div>

                        {/* Steps Block */}
                        <div className="md:columns-3 flex flex-col md:flex-row justify-between min-w-72 mx-auto md:mx-0 space-y-4 pt-5 sm:space-y-0">
                            {/* Step 1 */}
                            <div className="flex flex-row items-center">
                                <div className="pr-3 shrink-0">
                                    <Image src={add} alt="number1" width={65} height={65} className=""/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-red-900 font-ox text-sm">COMPANY LOCATION</p>
                                    <p className="text-black font-ox text-lg md:text-xl">2000 GEORGE ST <br className="hidden sm:block"/> SYDNEY, NSW</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-row items-center">
                                <div className="pr-3 shrink-0">
                                    <Image src={ph} alt="number2" width={65} height={65} className=""/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-red-900 font-ox text-sm">PHONE NUMBER</p>
                                    <div className="flex flex-row space-x-4 sm:flex-col sm:space-x-0">
                                        <p className="text-black font-ox text-lg md:text-xl">04 444 444 44</p>
                                        <p className="text-black font-ox text-lg md:text-xl">(02) 9999 999</p>
                                    </div>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-row items-center">
                                <div className="pr-3 shrink-0">
                                    <Image src={em} alt="number3" width={65} height={65} className=""/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-red-900 font-ox text-sm">EMAIL ADDRESS</p>
                                    <p className="text-black font-ox text-lg md:text-xl">PRIVATEEMAIL<br className="hidden sm:block"/>@EMAIL.COM</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
        )
}