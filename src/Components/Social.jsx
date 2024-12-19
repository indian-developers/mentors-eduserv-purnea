import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
function Social() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.innerWidth > 2000) {
            if (window.pageYOffset > 150 && window.pageYOffset < 2860) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        }
        else if (window.innerWidth <= 767) {
            if (window.pageYOffset > 100 && window.pageYOffset < 6660) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        }
        else {
            setIsVisible(false);
        }
    };
    return (
        <>
            {
                isVisible && (
                    <div className='fixed bottom-96 right-4'>
                        <div className="py-2">
                            <ul className="flex flex-col">
                                <Link to={"#"} target="_blank" className="border-2 border-txtcol my-2 bg-red p-3 bg-sec1 text-blue-600 hover:bg-gray-200 rounded-full"><li><FaFacebookF size={23} /></li></Link>
                                <Link to={"https://www.youtube.com/@chingarimediaofficial"} target="_blank" className="border-2 border-txtcol my-2 bg-red p-3 bg-sec1 text-red-700 hover:bg-gray-200 rounded-full"><li><FaYoutube size={23} /></li></Link>
                                <Link to={"https://www.instagram.com/chingarimedia"} target="_blank" className="border-2 border-txtcol my-2 bg-red p-3 bg-sec1 text-[#E1306C] hover:bg-gray-200 rounded-full"><li><FaInstagram size={23} /></li></Link>
                                <Link to={"https://www.linkedin.com/company/chingari-media"} target="_blank" className="border-2 border-txtcol my-2 bg-red p-3 bg-sec1 text-blue-500 hover:bg-gray-200 rounded-full"><li><FaLinkedin size={23} /></li></Link>
                            </ul >
                        </div >
                    </div>
                )
            }
        </>
    )
}

export default Social
