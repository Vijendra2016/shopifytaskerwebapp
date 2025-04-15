'use client';

import { useState } from 'react';



type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Task Created !');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    
<div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-8 px-10">
<div className="text-center lg:text-left">
    <h1 className="text-2xl md:text-3xl font-light">Interested?</h1>
    <br>
    </br>
    <h2 className="text-2xl md:text-3xl font-light"> Create your task   </h2>
    <p className="mt-4">
    It is simple — just submit your task, and within 5 hours, you will hear back from us with a detailed quote. If we need any additional information, we will arrange a quick discovery call to understand your requirements better.


    </p>
    
  </div>
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6  pt-30 bg-gray ">
    <div className="mb-6">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>
  
    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>
  
    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project/Task Description</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Describe your project/Task in Brief"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-32 resize-none"
      />
    </div>
  
    <div className="flex items-center justify-between">
      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Submit Task
      </button>
      {status && <p className="text-green-600 text-sm">{status}</p>}
    </div>
  </form>
  </div>

  );
}

