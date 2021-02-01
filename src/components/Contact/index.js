import React, { useState } from 'react';
import { validEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email') {
            const isValid = validEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if(!event.target.length) {
                    setErrorMessage(`${event.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value})
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        validEmail(formState)
    }
    
    return(
        <section className="m-5">
            <h1 className="contact-head">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <div className="mt-1 flex rounded-md shadow-lg">
                            <input type="text" name="name" placeholder="Enter Name Here" onBlur={handleChange} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <div className="mt-1 flex rounded-md shadow-lg">
                            <input type="text" name="name" placeholder="Enter Email Here" onBlur={handleChange} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                        <div className="mt-1 flex rounded-md shadow-lg">
                            <textarea name="name" rows="5" placeholder="Include A Message" onBlur={handleChange} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact;