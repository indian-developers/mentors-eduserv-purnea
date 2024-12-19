import { FaMessage } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
const Call = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.innerWidth > 768) {
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
            {isVisible && (
                <Link to={"tel:9155588414"} target="_blank" className="hover:opacity-85 transition-all">
                    <div className="bg-btnbg p-4 md:p-4 rounded-full inline-block fixed bottom-12 right-4 animate-bounce">
                        <IoCallSharp size={28} color="white" />
                    </div>
                </Link>
            )}
        </>
    );
};
export default Call;