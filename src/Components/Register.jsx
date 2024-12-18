import React from 'react'
import about from "../assets/about.webp"
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { GoDownload } from "react-icons/go";
import { div } from 'framer-motion/client';
function Register() {

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format current date and time as YYYY-MM-DD | HH:mm
        const now = new Date();
        const currentDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} | ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const hiddenInput = document.getElementById('currentDateTime');
        hiddenInput.value = currentDateTime;
        const form = e.target;
        const url = form.action;

        fetch(url, {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => response.json())
            .then((data) => {
                form.reset();
                setFormData({
                    name: '',
                    mobile: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Failed to send. Please try again.');
            });
    };
    return (
        <div className='about py-12'>
            <div className='flex justify-between items-center px-[200px] register border-2 border-gray-300 py-10 mx-44 rounded-lg'>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Batches are going to start soon..</h3>
                    <img src={about} alt="Mentors eduserv Purnea" className='w-96 rounded-md' />
                    <Button className='mt-4 w-48 mx-auto' colorScheme='red' size='md' rightIcon={<GoDownload />}>
                        Download Brochure
                    </Button>
                </div>
                <div className='w-96 bg-gray-100 px-10 py-10 rounded-md border-[1px] shadow-md'>
                    <div className='flex justify-center'>
                        <form
                            className="ml-auto space-y-4"
                            method="post"
                            action="https://sheetdb.io/api/v1/1fj6x5rl697sp"
                            id="sheetdb-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <h3 className='text-2xl font-bold text-txtcol'>
                                    Book your seat now..
                                </h3>
                            </div>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full rounded-md py-3 px-4 bg-white border-2 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            <input
                                type="number"
                                placeholder="Mobile"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleInputChange}
                                className="w-full rounded-md py-3 px-4 bg-white border-2 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            {/* Hidden field for the current date and time */}
                            <input type="hidden" id="currentDateTime" name="currentDateTime" />
                            <textarea
                                placeholder="Message"
                                rows="6"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full rounded-md px-4 border-2 bg-white text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                            ></textarea>
                            <button
                                type="submit"
                                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-3"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className='border-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F26B0F" fill-opacity="1" d="M0,192L16,181.3C32,171,64,149,96,122.7C128,96,160,64,192,80C224,96,256,160,288,202.7C320,245,352,267,384,234.7C416,203,448,117,480,117.3C512,117,544,203,576,197.3C608,192,640,96,672,64C704,32,736,64,768,112C800,160,832,224,864,240C896,256,928,224,960,192C992,160,1024,128,1056,128C1088,128,1120,160,1152,176C1184,192,1216,192,1248,181.3C1280,171,1312,149,1344,128C1376,107,1408,85,1424,74.7L1440,64L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Register
