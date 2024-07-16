import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here, such as sending the data to a server or API
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="p-3 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-3 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-semibold text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            className="p-3 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            {...register('subject', { required: true })}
          />
          {errors.subject && <span className="text-red-500 text-sm mt-1">This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="p-3 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            rows="5"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm mt-1">This field is required</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
