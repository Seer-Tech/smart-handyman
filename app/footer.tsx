{/* Imports */}
import Image from "next/image"

{/* Images */}
import footerLogo from './images/footer/footer-logo.png';
import tw from './images/footer/tw.png';
import fb from './images/footer/fb.png';
import ins from './images/footer/ins.png';
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="mx-auto mx-w-full pb-10 md:pb-0 bg-footer">
                <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 md:columns-3 flex flex-col sm:flex-row sm:justify-between items-center pt-10 space-y-4 sm:space-y-0 sm:pb-5"> 
                    <div>
                        <Image src={footerLogo} alt="logo" width={200} height={317} className=""/>
                    </div>
                    <div>
                        <p className="font-ox text-red-800 font-medium text-xl md:text-xl">COPYRIGHT 2024</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                    <Link href="#"><Image src={fb} alt="fb" width={30} height={30} className=""/></Link>
                    <Link href="#"><Image src={tw} alt="tw" width={30} height={30} className=""/></Link>
                    <Link href="#"><Image src={ins} alt="ins" width={30} height={30} className=""/></Link>
                    </div>
                </div>
            </div>

        </>
        )
}