import React from 'react'
import hero from "../assets/hero.png"
import { FaWhatsapp } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
function Hero() {
    return (
        <div>
            <div className="bg-white hero flex justify-center items-center py-12 md:py-28">
                <div className="flex flex-col md:flex-row justify-between items-center w-[80vw] md:w-[50vw]">
                    <div className="flex flex-col">
                        <h1 className="font-bebas-neue text-center md:text-justify text-3xl font-black flex flex-col text-gray-600 mb-4">
                            Mentors Eduserv अब आपके शहर पूर्णिया में
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500 text-center md:text-start">
                            Get Upto 100% Scholarship - Admission cum Scholarship Test (ACST)
                        </p>
                        <ul className='text-gray-500'>
                            <li className='flex items-center mb-4 mt-2'>
                                <MdVerifiedUser size={22} className='text-green-500' />
                                IIT JEE
                            </li>
                            <li className='flex items-center mb-4'>
                                <MdVerifiedUser size={22} className='text-green-500' />
                                NEET and PGMS
                            </li>
                            <li className='flex items-center mb-4'>
                                <MdVerifiedUser size={22} className='text-green-500' />
                                KVPY and Olympiad
                            </li>
                        </ul>
                        <div className="flex justify-center md:justify-normal my-8">
                            <div className='flex'>
                                <a href="tel:7667430491" className="uppercase py-2 px-4 rounded-lg bg-btnbg border-2 border-transparent text-white text-md mr-4 hover:opacity-85">
                                    Call Now
                                </a>
                                <a href="https://wa.me/+917667430491" target='_blank' className="py-2 px-4 rounded-lg bg-transparent border-2 flex justify-center items-center border-green-500 hover:bg-btnbg hover:text-white text-md">
                                    <FaWhatsapp size={26} className='inline text-green-500' />
                                    <p>
                                        Whatsapp
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={hero} className="border-2 md:w-80 border-red-600 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
