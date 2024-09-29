{/* Imports */}
import Image from "next/image";

{/* Images */}
import headerImage from './images/header.png';
import buttonArrow from './images/mdi_chevron-right.png'

export default function Hero({setOpen} : {setOpen: (value: boolean) => void}) {
    return (
        <>
            <div className="mx-auto mx-w-full bg-header pb-10 md:pb-0">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-header md:columns-2 sm:flex items-center text-center sm:text-start"> 
                    <div className="w-full items-center space-y-8 flex flex-col justify-center sm:block">
                    <div className="w-full flex justify-end flex justify-center sm:hidden">
                        <Image src={headerImage} alt="handyman" width={200} height={317} className=""/>
                    </div>
                    <p className="font-ox font-medium text-5xl md:text-7xl xl:text-8xl">Handyman Services</p>
                    <p className="font-ra text-md md:text-xl">We are a team of experienced handymen ready to deliver exceptional service across the board.</p>
                    
                    <button onClick={() => setOpen(true)} className="rounded-none bg-red-700 h-10 md:h-12 flex items-center p-2 md:p-5 space-x-1 md:space-x-2.5 shrink">
                        <p className="font-ra font-bold text-sm md:text-md">SCHEDULE YOUR APPOINTMENT</p>
                        <Image src={buttonArrow} height={20} width={20} alt="button arrow"/>
                    </button>
                    </div>
                    <div className="w-full flex justify-end hidden sm:flex">
                    <div className="w-72 md:w-80 lg:w-full lg:justify-end lg:flex">
                        <Image src={headerImage} alt="handyman" width={400} height={634} className=""/>
                    </div>
                    </div>
                </div>
            </div>
        </>
        )
}