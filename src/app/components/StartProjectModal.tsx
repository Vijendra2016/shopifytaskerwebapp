"use client";

import React, { useState } from "react";



import TrustFactsSwiper from "./TrustFactsSwiper";
import GsapMarquee from "./GsapMarqueeStart";
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

      
        
      <div className="w-full md:w-[600px] h-full bg-white  md:m-2  p-6 overflow-y-auto relative">
        <button className="absolute  text-black cursor-pointer top-2 right-2 text-lg" onClick={onClose}>
          ✕ close
        </button>

        <form onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {step === 1 && (
            <>
            <p className="text-xs text-gray-500 mb-2 text-left">Step 1 of 3</p>
              <h2 className="text-4xl text-black font-bold mb-2 text-left">Let’s Get Started</h2>
              <p className="mb-2  text-sm font-semibold text-gray-700">
Tell us what you need — our Shopify experts will review your request and respond within 1 hour with next steps.
No upfront payment. Pay only after successful delivery.
</p>

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
                  className="w-full border text-black border-black p-2 rounded mb-4 placeholder-gray-400 placeholder:text-sm"
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

<TrustFactsSwiper/>

           
   


            </>
            
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              
              <p className="text-xs text-gray-500 mb-2 text-left">Step 2 of 3</p>
              <h3 className="text-4xl font-bold text-black text-left  mb-2">How can we help you?  </h3>
              <p className="mb-4 text-sm font-semibold text-gray-600 text-left">

It only takes a few minutes. Share a few details and our Shopify experts will take it from there.
              </p>
              <div className="mb-1">
                <label htmlFor="tasktitle" className="block mb-2  text-left text-black  font-semibold">
                  Short summary of your request
                </label>
                <input
                  id="tasktitle"
                  name="tasktitle"
                  value={formData.tasktitle}
                  required
                  onChange={handleChange}
                  placeholder="What do you need help with? (e.g.  New store setup,theme update, bug fix, speed issue)"
                  className="w-full border-black border text-black p-2 rounded mb-4 placeholder-gray-400 placeholder:text-sm"
                  
                />
              </div> 
              
              <div className="mb-1">
                <label htmlFor="message" className="block text-left text-black mb-2 font-semibold">
                  Tell us about your project/ task
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your task in more detail. What are you trying to achieve?
Where should this apply (product page, cart, checkout)?
You can also share links or screenshots."
                  required
                  className="w-full h-40 border-black text-black border p-2 rounded mb-4 placeholder-gray-400 placeholder:text-sm"
                />
              </div>


              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-md border border-black/20 text-black hover:bg-black/5 transition-colors"
                >
                 
                ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8  cursor-pointer text-lg py-2 bg-[#DFF976] text-black rounded-md hover:bg-[#DFF976] transition-colors flex items-center"
                >
                  <span>Next →</span>
                 
                </button>
              </div>

              <div className="bg-green-50 rounded-lg border border-green-100 p-3 mt-5">
  <h3 className="font-semibold text-xs text-black ">
    Why ShopifyTasker
  </h3>
  <p className="text-xs text-black leading-relaxed">
    97% of our clients return for ongoing improvements.  
    Many trust us as their long-term Shopify development partner.
  </p>
</div>
<GsapMarquee/>


          
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
  <>
    <p className="text-xs text-gray-500 mb-2 text-left">Step 3 of 3</p>

    <h3 className="text-4xl text-black font-bold mb-2 text-left">
      How can we reach you?
    </h3>

    <p className="mb-2git text-gray-600 text-left text-sm">
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
          className="w-full border text-black p-2 rounded-md border-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
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
          className="w-full border p-2 text-black rounded-md border-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
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
              <h3 className="text-2xl font-bold text-black mb-3">
  Thanks! Your request is in review 🎉
</h3>
              <p className="text-gray-600 mb-6">
  We’ll review your request and respond within <strong>1 business hour</strong>
  with a quote and timeline.
  <br />
  🔒 Secure process — no payment required until the task is completed.
</p>
              {/* Reassurance (optional but makes it feel premium) */}
      <div className="mb-5 text-sm text-gray-700 space-y-2">
  <p className="font-semibold text-black">What happens next?</p>
  <p>• We review your request</p>
  <p>• You receive a quote and timeline by email</p>
  <p>• Work begins after your approval</p>
</div>

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
