"use client";

import React, { useState } from "react";
import { TfiArrowTopRight } from 'react-icons/tfi';


type FormData = {
  name: string;
  email: string;
  message: string;
  url: string;
  tasktitle: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    url: '',
    tasktitle: '',
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
      setStatus('Task Created! We will get back to you within 1-2 hours with full details.');
      setFormData({ name: '', email: '', message: '', url: '', tasktitle: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-full md:w-[500px] h-full bg-white p-6 overflow-y-auto relative">
        <button className="absolute top-4 right-4 text-3xl" onClick={onClose}>
          ✕ close
        </button>
        <h2 className="text-3xl font-bold mb-2">Get Started</h2>
        <p className="mb-4 text-gray-600">
          Create your project and we will be back to you ASAP.
        </p>

       

        

        <form onSubmit={handleSubmit} >
          

          <div className="mb-1">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border p-2 rounded mb-4"
            />
          </div>

          <div className="mb-1">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border p-2 rounded mb-4"            />
          </div>

          <div className="mb-1">
            <label htmlFor="url" className="block mb-2 font-semibold">Shopify Store URL (Optional)</label>
            <input
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="yourstore.com"
              className="w-full border p-2 rounded mb-4"            />
          </div>

          <div className="mb-1">
            <label htmlFor="tasktitle" className="block mb-2 font-semibold">Project / Task Title</label>
            <input
              id="tasktitle"
              name="tasktitle"
              value={formData.tasktitle}
              onChange={handleChange}
              placeholder="Need to add new function / need theme update"
              className="w-full border p-2 rounded mb-4"            />
          </div>

          <div className="mb-1">
            <label htmlFor="message" className="block mb-2 font-semibold">Project/Task Description</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project/task in brief"
              required
              className="w-full border p-2 rounded mb-4"            />
          </div>

          <div className="flex items-center justify-between">
            
            <button
  type="submit"
  className="px-4 py-2 bg-green-300 text-black rounded-md hover:bg-blue-700 transition-colors flex items-center"
>
  <span>Submit Task</span>
  <TfiArrowTopRight className="ml-2" />
</button>

            {status && <p className="text-green-600 text-sm ml-4">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
