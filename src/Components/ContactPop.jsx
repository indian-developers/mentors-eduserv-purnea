import React from 'react'
import { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';

function ContactPop() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md');

    useEffect(() => {
        // Open the modal when the component mounts
        onOpen();
    }, [onOpen]);

    const handleSizeClick = (newSize) => {
        setSize(newSize);
        onOpen();
    };
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

        const loadingToast = toast.loading('Sending...');
        const form = e.target;
        const url = form.action;

        fetch(url, {
            method: "POST",
            body: new FormData(form),
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success('Thank you. We will call you soon.', { duration: 4000 });
                toast.dismiss(loadingToast);
                form.reset();
                setFormData({
                    name: '',
                    mobile: '',
                    city: '',
                    class: '',
                    message: '',
                });
                onClose(); // Close the modal after successful submission
            })
            .catch((error) => {
                toast.error('Failed to send. Please try again.');
                toast.dismiss(loadingToast);
            });
    };
    return (
        <div>

            <Modal onClose={onClose} size={size} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='text-center'>Get admission details?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className='flex justify-center'>
                            <form
                                className="ml-auto space-y-4"
                                method="post"
                                action="https://sheetdb.io/api/v1/hvp7xk2tx9tmk"
                                id="sheetdb-form"
                                onSubmit={handleSubmit}
                            >
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
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Toaster />
        </div>
    );
}

export default ContactPop
