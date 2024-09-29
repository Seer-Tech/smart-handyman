{/* Imports */}
import Image from "next/image";

{/* Images */}
import stockImage from './images/repairs/stock-image.png';

export default function Repairs() {
    return (
        <>
            <div className="mx-auto mx-w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8 bg-white md:columns-2 flex flex-col md:flex-row text-start"> 
                    
                    <div className="w-72 md:w-full items-center space-y-8 flex flex-col justify-center sm:block mx-auto">
                        {/* Title Block */}
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 bg-white flex flex-col sm:text-start items-center md:items-start"> 
                            <p className="text-red-600 font-ox font-medium text-sm md:text-md lg:text-lg w-full text-center md:text-start">HANDYMAN REPAIRS</p>
                            <p className="text-red-800 font-ox font-medium text-4xl lg:text-5xl">What we do</p>
                        </div>
                        {/* Mobile Image */}
                        <div className="w-full flex justify-center md:justify-end flex md:hidden">
                            <div className="w-72 md:w-80 lg:w-full lg:justify-start lg:flex">
                                <Image src={stockImage} alt="handyman" width={445} height={590} className=""/>
                            </div>
                        </div>

                        {/* Steps Block */}
                        {/* Step 1 */}
                        <div className="flex flex-col pl-0 md:pl-5">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Home Repairs Made Easy</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">From leaky faucets to squeaky doors, our handyman services tackle all those pesky household repairs. Let us handle the maintenance so you can enjoy a worry-free home.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col pl-0 md:pl-5">
                            <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Furniture Assembly Specialists</p>
                            <p className="text-black font-ra text-sm md:text-md pl-1">Struggling with flat-pack furniture? Our team can quickly assemble your new purchases, ensuring they’re sturdy and ready for use in no time.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col pl-0 md:pl-5">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Painting and Drywall Solutions</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">Refresh your space with our professional painting and drywall services. We bring a keen eye for detail, transforming your walls into a beautiful canvas.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col pl-0 md:pl-5">
                                <p className="text-red-900 font-ox text-xl md:text-2xl lg:text-3xl">Custom Solutions for Unique Needs</p>
                                <p className="text-black font-ra text-sm md:text-md pl-1">Have a project in mind that doesn&lsquot fit the usual categories? Our skilled handymen are ready to tackle any unique service you require, providing tailored solutions to meet your specific needs.</p>
                        </div>
                        {/* Or Block */}
                        <div className=" bg-red-600 px-2 py-2 drop-shadow-2xl">
                            <p className="text-white font-ox text-lg md:text-xl lg:text-2xl">We are handyman, our speciality is repairs and maintenance</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center md:justify-end hidden md:flex">
                        <div className="w-72 md:w-80 lg:w-full lg:justify-end lg:flex">
                            <Image src={stockImage} alt="handyman" width={445} height={590} className=""/>
                        </div>
                    </div>

                </div>
            </div>
        </>
        )       
}