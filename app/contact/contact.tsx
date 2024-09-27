{/* Imports */}
import Image from "next/image";

{/* Images */}
import buttonArrow from '../images/contact/arrow.png';
import ContactSidebar from "./contactSidebar";

export default function Contact({open, setOpen} : {open: boolean, setOpen: (value: boolean) => void}) {
    return (
        <>
            <div className="mx-auto mx-w-full bg-white py-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white md:grid lg:grid-cols-10 gap-10 flex flex-col md:flex-row"> 
                    
                    <div className="w-full md:w-full space-y-2 md:space-y-4 flex flex-col md:col-span-6 items-center text-start md:block">
                        {/* Title Block */}
                        <div className="mx-auto max-w-7xl px-2 md:px-0 flex flex-col"> 
                            <p className="text-red-600 font-ox font-medium text-sm md:text-md lg:text-lg w-full text-center sm:text-start">APPOINTMENT</p>
                            <p className="text-red-800 font-ox font-medium text-4xl lg:text-5xl">Get in contact</p>
                        </div>
                        {/* Form */}
                        <div className="w-72 md:w-2/3 lg:w-full space-y-2 md:space-y-4">
                            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:gap-2 md:space-y-0">
                                <input type="text" className="text-sm text-black border border-red-800 rounded-none p-1 w-full" placeholder="Full name"/>
                                <input type="text" className="text-sm text-black border border-red-800 rounded-none p-1 w-full" placeholder="E - mail"/>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:gap-2 md:space-y-0">
                                <input type="text" className="text-sm text-black border border-red-800 rounded-none p-1 w-full" placeholder="Phone number"/>
                                <select id="service" name="service" className="text-sm text-black bg-white border border-red-800 rounded-none p-1 pb-1.5 md:pb-0 w-full" defaultValue="Select a service" defaultValue={"default"}>
                                    <option value="default" disabled>Select a service</option>
                                    <option value="general">General</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="md:flex-row md:space-x-2 space-y-2 md:space-y-0 align-top align-text-top align-super">
                                <input type="text" className="h-40 text-black text-sm border border-red-800 rounded-none p-1 w-full pb-32" placeholder="Message"/>
                            </div>
                            <button onClick={() => setOpen(true)} className="rounded-none bg-red-700 h-10 md:h-12 flex items-center p-2 md:p-5 space-x-1 md:space-x-2.5 shrink w-72 sm:w-auto justify-center">
                                <p className="font-ra text-white font-bold text-sm md:text-sm">Get in contact</p>
                                <Image src={buttonArrow} height={14} width={13} alt="button arrow" className="hidden sm:flex"/>
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex justify-center md:justify-end hidden lg:flex col-span-4">
                        <ContactSidebar />
                    </div>

                </div>
            </div>
        </>
        )
}