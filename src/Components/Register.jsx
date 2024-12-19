import React from 'react'
import about from "../assets/about.webp"
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { GoDownload } from "react-icons/go";
function Register() {

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: '',
        class: '',
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
                    city: '',
                    class: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Failed to send. Please try again.');
            });
    };
    return (
        <div className='about py-12 flex justify-center'>
            <div className='flex flex-col md:flex-row md:justify-between items-center register border-2 w-[98vw] md:w-[60vw] md:px-[100px] border-gray-300 py-10 mx-2 md:mx-44 rounded-lg'>
                <div className='flex flex-col justify-center mx-4 md:mx-10'>
                    <h3 className='text-2xl font-semibold text-gray-700 mb-4 text-center md:text-justify'>Batches are going to start soon..</h3>
                    <img src={about} alt="Mentors eduserv Purnea" className='w-96 rounded-md' />
                    <Button className='mt-4 mb-4 md:mb-0 w-48 mx-auto' colorScheme='red' size='md' rightIcon={<GoDownload />}>
                        Download Brochure
                    </Button>
                </div>
                <div className='md:w-96 bg-gray-100 px-10 py-10 rounded-md border-[1px] shadow-md w-[90vw]'>
                    <div className='flex justify-center'>
                        <form
                            className="ml-auto space-y-4"
                            method="post"
                            action="https://sheetdb.io/api/v1/hvp7xk2tx9tmk"
                            id="sheetdb-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <h3 className='text-xl font-bold text-txtcol text-center md:text-justify'>
                                    Book scholarship and admission details
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
                            <input
                                type="text"
                                placeholder="City Name"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full rounded-md py-3 px-4 bg-white border-2 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            <input
                                type="number"
                                placeholder="Class Name"
                                name="class"
                                required
                                value={formData.class}
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
            </div>
        </div>
    )
}

export default Register
