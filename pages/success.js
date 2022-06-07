import Nav from '../components/nav'
import Footer from '../components/footer'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Success() {
   
   
    return (
        <div className="flex flex-col h-screen bg-black font-sans font-extralight">
            <Nav />
            <div className="relative bg-black">
                <div className="absolute inset-0">
                    <div className=" bg-black absolute inset-y-0 left-0 w-1/2" />
                </div>
                <div className="relative max-w-7xl">
                    <div className="w-screen h-screen bg-[url('/hero-img.jpg')] justify-center flex items-center">
                        <p className="px-4 text-shadow-lg text-center text-white text-4xl">Thank you for your message
                        <br></br>
                        <span className="text-base md:text-2xl">Keep an eye out for a response soon!</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
