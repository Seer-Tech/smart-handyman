{/* Imports */}
import Image from "next/image";

{/* Images */}
import stock1 from '../images/contact/1.png';
import stock2 from '../images/contact/2.png';
import stock3 from '../images/contact/3.png';


export default function ContactSidebar() {
    return (
        <>
            <div className="w-72 md:w-80 lg:w-full lg:justify-center gap-10 flex flex-col">
                <div className="flex flex-row">
                    <div className="pt-2 pr-3 md:w-auto">
                        <Image src={stock1} alt="stock1" width={83} height={69.55} className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-red-900 font-ox text-xl md:text-xl lg:text-2xl">Book your appointment</p>
                        <p className="text-black font-ra text-sm md:text-md pl-1">Select a time that suits you best, we will send you a confirmation then we will be there on the day.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="pt-2 pr-3 md:w-auto">
                        <Image src={stock2} alt="stock2" width={83} height={69.55} className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-red-900 font-ox text-lg md:text-xl lg:text-2xl">Book your appointment</p>
                        <p className="text-black font-ra text-sm md:text-md pl-1">Select a time that suits you best, we will send you a confirmation then we will be there on the day.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="pt-2 pr-3 md:w-auto">
                        <Image src={stock3} alt="stock3" width={83} height={69.55} className=""/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-red-900 font-ox text-lg md:text-xl lg:text-2xl">Book your appointment</p>
                        <p className="text-black font-ra text-sm md:text-md pl-1">Select a time that suits you best, we will send you a confirmation then we will be there on the day.</p>
                    </div>
                </div>
            </div>
        </>
        )
}