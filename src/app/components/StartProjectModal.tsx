"use client";

import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import { 
  TiTick, 
  TiFlash, 
  TiStarFullOutline, 
  TiGroup 
} from "react-icons/ti";



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
    <div className="fixed inset-0 bg-[#000000cf] bg-opacity-50 flex justify-end z-50">

      
        
      <div className="w-full md:w-[700px] h-full bg-white p-6 overflow-y-auto relative">
        <button className="absolute  text-black cursor-pointer top-2 right-2 text-lg" onClick={onClose}>
          ✕ close
        </button>

        <form onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-4xl text-black font-bold mb-2 text-left">Let’s Get Started</h2>
              <p className="mb-2  text-[15px] font-base text-gray-700">
Tell us what you need — our in-house Shopify experts  will send you a free solution & quote within 1 hour.No upfront payment — billing begins only after successful delivery. </p>

              <div className="mb-1">
                <label htmlFor="url" className="block text-lg text-black text-left font-semibold">
                  Shopify Store URL (Optional)
                </label>
                <span className="text-gray-700 text-sm font-base">Don’t have a store yet? No problem — continue</span>
                <input
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="yourstore.com"
                  className="w-full border text-black border-black p-2 rounded mb-4 placeholder-gray-400"
                />
              </div>
                     
             
             
             <fieldset className="mb-4">
  <legend className="block text-black text-lg text-left font-semibold mb-2">
    What type of task do you need help with?
  </legend>

  <div className="flex flex-wrap gap-3">
    {[
      "Shopify Tasks",
      "Shopify Theme Update",
      "Shopify Store Development",
      "Store Speed Optimization",
      "Shopify Plus Tasks",
      "Shopify SEO",
      "Shopify Support Retainer",
      "Shopify App Configuration",
    ].map((label) => {
      const selected = formData.taskselect === label;

      return (
        <label
          key={label}
          className={[
            "cursor-pointer select-none rounded-full border px-4 py-2 text-sm font-medium transition",
            "hover:shadow-sm",
            "focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2",
            selected
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black/80 hover:bg-black/5",
          ].join(" ")}
        >
          <input
            type="radio"
            name="taskselect"
            value={label}
            checked={selected}
            onChange={(e) =>
              setFormData({ ...formData, taskselect: e.target.value })
            }
            className="sr-only"
          />
          {label}
        </label>
      );
    })}
  </div>
</fieldset>


             <button
  type="button"
  onClick={() => setStep(2)}
  className="px-8 py-2 text-lg cursor-pointer bg-[#DFF976] text-black rounded-md hover:bg-[#DFF976] transition-colors flex items-center"
>
  Continue →
</button>

             <br>
             </br>

             <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
      
      <div className="flex items-center gap-3">
        <TiTick className="text-black text-3xl" />
        <span>Trusted by 500+ Shopify stores</span>
      </div>

      <div className="flex items-center gap-3">
        <TiFlash className="text-black text-3xl" />
        <span>Avg response time under 1 hour</span>
      </div>

      <div className="flex items-center gap-3">
        <TiStarFullOutline className="text-black text-3xl" />
        <span>10+ years Shopify ecosystem experience</span>
      </div>

      <div className="flex items-center gap-3">
        <TiGroup className="text-black text-3xl" />
        <span>Real in-house team — no freelancers</span>
      </div>

    </div>

    


            </>
            
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              
              <h3 className="text-4xl font-bold text-black text-left  mb-2">How can we help?  </h3>
              <p className="mb-4 text-lg text-gray-600 text-left">

                It takes just a few minutes. Share a few details and we’ll take it from there.
              </p>
              <div className="mb-1">
                <label htmlFor="tasktitle" className="block mb-2  text-left text-black  font-semibold">
                  Short summary of your request
                </label>
                <input
                  id="tasktitle"
                  name="tasktitle"
                  value={formData.tasktitle}
                  onChange={handleChange}
                  placeholder="Need to add new function / need theme update"
                  className="w-full border-black border text-black p-2 rounded mb-4 placeholder-gray-400"
                  
                />
              </div> 
              
              <div className="mb-1">
                <label htmlFor="message" className="block text-left text-black mb-2 font-semibold">
                  Tell us about your project/task
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you trying to achieve?
Where does this change apply? (PDP, cart, checkout, etc.)
Any links, screenshots, or examples?"
                  required
                  className="w-full h-40 border-black text-black border p-2 rounded mb-4 placeholder-gray-400"
                />
              </div>


              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 cursor-pointer bg-black text-white rounded-md hover:bg-black flex items-center"
                >
                 <TiArrowLeft />
                 Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8  cursor-pointer text-lg py-2 bg-[#DFF976] text-black rounded-md hover:bg-[#DFF976] transition-colors flex items-center"
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
    <p className="text-xs text-gray-500 mb-2 text-left">Step 3 of 3</p>

    <h3 className="text-4xl text-black font-bold mb-2 text-left">
      How can we reach you?
    </h3>

    <p className="mb-6 text-gray-600 text-left text-sm">
      We’ll contact you by email with a quote and next steps.
    </p>

    {/* Card container */}
    <div className="rounded-xl border border-black/10 bg-white p-6">
      {/* Name (same field name + id) */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-1 text-black text-left text-sm font-semibold"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full border text-black p-3 rounded-md border-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        />
      </div>

      {/* Email (same field name + id) */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-left mb-1 text-black text-sm font-semibold"
        >
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
          className="w-full border p-3 text-black rounded-md border-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        />
      </div>

      {/* Reassurance (optional but makes it feel premium) */}
      <div className="mb-5 text-sm text-gray-700 space-y-1">
        <p>✔ No upfront payment</p>
        <p>✔ Free initial review</p>
        <p>✔ We’ll reply with next steps</p>
      </div>

      {/* CTA Footer */}
      <div className="pt-4 border-t border-black/10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-4 py-2 rounded-md border border-black/20 text-black hover:bg-black/5 transition-colors"
        >
          ← Back
        </button>

        {/* IMPORTANT: still type="submit" so your email send works */}
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#DFF976] text-black rounded-md hover:opacity-90 transition-colors flex items-center font-medium"
        >
          <span>Submit request →</span>
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        🔒 Your information is kept private and used only for this request.
      </p>

      {status && <p className="text-green-600 text-sm mt-4">{status}</p>}
    </div>
  </>
)}


          {/* STEP 4 - Success Message */}
          {step === 4 && (
            <div className="text-center py-20">
              <h2 className="text-4xl text-black font-bold mb-4">🎉 Task Submitted!</h2>
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
