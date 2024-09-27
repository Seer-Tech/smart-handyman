{/* Imports */}
import Image from "next/image";

{/* Images */}
import stockImage from './images/process/stock-image.png';
import number1 from './images/process/number1.png';
import number2 from './images/process/number2.png';
import number3 from './images/process/number3.png';

export default function Process() {
    return (
        <>
            <div className="mx-auto mx-w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8 bg-white md:columns-2 flex flex-col md:flex-row text-start"> 
                    <div className="w-full flex justify-center md:justify-end hidden md:flex">
                        <div className="w-72 md:w-80 lg:w-full lg:justify-start lg:flex">
                            <Image src={stockImage} alt="handyman" width={445} height={590} className=""/>
                        </div>
                    </div>
                    <div className="w-72 md:w-full items-center space-y-8 flex flex-col justify-center sm:block mx-auto">
                        {/* Title Block */}
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 bg-white flex flex-col sm:text-start items-center md:items-start"> 
                            <p className="text-red-600 font-ox font-medium text-sm md:text-md lg:text-lg w-fulll">THE PROCESS</p>
                            <p className="text-red-800 font-ox font-medium text-4xl lg:text-5xl">How it works</p>
                        </div>
                        {/* Mobile Image */}
                        <div className="w-full flex justify-center md:justify-end flex md:hidden">
                            <div className="w-72 md:w-80 lg:w-full lg:justify-start lg:flex">
                                <Image src={stockImage} alt="handyman" width={445} height={590} className=""/>
                            </div>
                        </div>

                        {/* Steps Block */}
                        {/* Step 1 */}
                        <div className="flex flex-row">
                            <div className="pt-2 pr-3 w-16 md:w-10">
                                <Image src={number1} alt="number1" width={20} height={20} className=""/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Tell Us What You Need to Solve</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">Select the service you need otherwise choose Other and fill out the form including as much detail as possible on the service and your requirements.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-row">
                            <div className="pt-2 pr-3 shrink w-12 md:w-auto">
                                <Image src={number2} alt="number2" width={20} height={20} className=""/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Book your appointment</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">Select a time that suits you best, we will send you a confirmation then we will be there on the day.</p>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-row">
                            <div className="pt-2 pr-3 w-12 md:w-auto">
                                <Image src={number3} alt="number3" width={20} height={20} className=""/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Open your account and start solving</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">We will come out and do the work on the spot or book another appointment if it’s a larger job.</p>
                            </div>
                        </div>
                        {/* Or Block */}
                        <div className="text-center">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">OR</p>
                        </div>
                        <div className="text-center">
                                <p className="text-red-900 font-ox text-lg md:text-xl lg:text-2xl">Skip all the steps, give us a call and we will sort it out over the phone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}