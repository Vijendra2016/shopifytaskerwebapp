"use client";

import React, { useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";


type FormData = {
  name: string;
  email: string;
  message: string;
  url: string;
  tasktitle: string;
  taskselect: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    url: "",
    tasktitle: "",
    taskselect: "",
  });

  const [status, setStatus] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("");
      setFormData({
        name: "",
        email: "",
        message: "",
        url: "",
        tasktitle: "",
        taskselect: "",
      });
      setStep(4); // Success step
    } else {
      setStatus("Failed to send message.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
        
      <div className="w-full md:w-[700px] h-full bg-white p-6 overflow-y-auto relative">
        <button className="absolute cursor-pointer top-2 right-2 text-lg" onClick={onClose}>
          ✕ close
        </button>

        <form onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-6xl text-black font-bold mb-2">Lets Start</h2>
              <p className="mb-4 text-gray-600">
              It only takes a few clicks to get going. After that, our in-house e-commerce experts will guide you every step of the way.
              </p>

              <div className="mb-1">
                <label htmlFor="url" className="block mb-0.5 font-semibold">
                  Shopify Store URL
                </label>
                <input
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="yourstore.com"
                  className="w-full border p-2 rounded mb-4"
                />
              </div>
                     
              <div className="mb-4">
                <label className="block font-semibold mb-2">What type of Task you have ?</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Shopify Tasks",
                    "shopify Theme udpate",
                    "Shopify Store Development",
                    "Shopify Theme Update",
                    "Shopify Plus's Task ",
                    "Shopify SEO",
                    "Shopify Support Retainer",
                    "Shopify App Configuration"
                  ].map((label) => (
                    <label
                      key={label}
                      className={`cursor-pointer px-4 py-2 rounded border transition-all ${
                        formData.taskselect === label
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      <input
                        type="radio"
                        name="taskselect"
                        value={label}
                        checked={formData.taskselect === label}
                        onChange={(e) => setFormData({ ...formData, taskselect: e.target.value })}
                        className="hidden"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
             

              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-8 py-2  text-lg cursor-pointer float-right bg-green-300 text-black rounded-md hover:bg-green-700 transition-colors flex items-center"
              >
                <span>Next</span>
                <span className="text-3xl "><TiArrowRight /></span>
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              
              <h3 className="text-4xl font-bold mb-2">Brief Details of Task  </h3>
              <p className="mb-4 text-sm text-gray-600">
              Share a few key details about your project, and we  analyze the requirements and get back to you with a personalized quote and timeline.


              </p>
              <div className="mb-1">
                <label htmlFor="tasktitle" className="block mb-2 font-semibold">
                  Project / Task Title
                </label>
                <input
                  id="tasktitle"
                  name="tasktitle"
                  value={formData.tasktitle}
                  onChange={handleChange}
                  placeholder="Need to add new function / need theme update"
                  className="w-full border p-2 rounded mb-4"
                />
              </div> 
              
              <div className="mb-1">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Project/Task Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project/task in brief"
                  required
                  className="w-full h-40 border p-2 rounded mb-4"
                />
              </div>


              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 cursor-pointer bg-gray-200 text-black rounded-md hover:bg-gray-300 flex items-center"
                >
                 <TiArrowLeft />
                 Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8  cursor-pointer text-lg py-2 bg-green-300 text-black rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  <span>Next</span>
                  <span className="text-3xl "><TiArrowRight /></span>
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
            <h3 className="text-4xl font-bold mb-2">Your Details </h3>
              <p className="mb-4 text-gray-600 text-sm">
              Expect to hear from us directly via  email.
              </p>
              
              <div className="mb-1">
                <label htmlFor="name" className="block mb-0.5 font-semibold">
                  Your Name
                </label>
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
                <label htmlFor="email" className="block mb-0.5 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border p-2 rounded mb-4"
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2  cursor-pointer bg-gray-200 text-black rounded-md hover:bg-gray-300 flex items-center"
                > <TiArrowLeft />

                  Back
                </button>
                <button
                  type="submit"
                  className="px-4  cursor-pointer py-2 bg-green-300 text-black rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  <span>Submit Task</span>
                  <TfiArrowTopRight className="ml-2" />
                </button>
              </div>
              {status && <p className="text-green-600 text-sm mt-4">{status}</p>}
            </>
          )}

          {/* STEP 4 - Success Message */}
          {step === 4 && (
            <div className="text-center py-20">
              <h2 className="text-4xl font-bold mb-4">🎉 Task Submitted!</h2>
              <p className="text-gray-600 mb-6">
                We review your project and get back to you within 5 hours with quote and timeline .
                🔒 Secure — No payment required until task is complete.
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="px-6 py-3 bg-black text-white rounded-md"
              >
                Done
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
