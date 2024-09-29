import Image from 'next/image';
import ctoArrow from './images/cto/cto-arrow.png';

export default function CTO({setOpen} : {setOpen: (value: boolean) => void}) {
    return (
        <>
            <div className="max-w-full md:columns-3 gap-0 bg-card drop-shadow-sm">
                <div className='h-48 hidden md:flex flex-col text-center justify-center'>
                    <div className='flex flex-col items-start mx-auto'>
                        <p className='font-ox font-medium text-md text-black'>CALL US TODAY</p>
                        <p className='font-ox font-bold text-xl lg:text-3xl text-blue-900'>(02) 9999 9999</p>
                    </div>
                </div>
                <div className='h-40 md:h-48 shadow flex flex-col items-center justify-center'>
                    <p className='font-ox text-md text-black pt-5 md:pt-0'>BOOK APPOINTMENT</p>
                    <button onClick={() => setOpen(true)} className="transition-all ease-in-out duration-500 rounded-none bg-red-700 hover:bg-red-800 flex w-60 lg:w-80 h-14 md:h-20  p-8 md:p-8 flex items-center shadow-md space-x-4 md:space-x-0 flex justify-center md:jusitfy-start">
                        <p className='font-ox font-semibold text-lg lg:text-2xl text-white'>Schedule your Appointment</p>
                        <Image src={ctoArrow} height={14} width={18} alt="button arrow"/>
                    </button>
                </div>
                <div className='h-48 hidden md:flex flex-col text-center justify-center'>
                    <div className='flex flex-col items-start mx-auto'>
                        <p className='font-ox font-medium text-md text-black'>EMAIL US</p>
                        <p className='font-ox font-bold text-xl lg:text-3xl text-blue-900'>SMART@EMAIL.COM</p>
                    </div>
                </div>
            </div>
        </>
    )
}