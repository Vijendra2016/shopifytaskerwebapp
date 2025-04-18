"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';



// Quote form component to be included in your page
export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    serviceType: '',
    details: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' });
    
    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit quote request');
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        storeUrl: '',
        serviceType: '',
        details: '',
        budget: ''
      });
      
      setSubmitStatus({
        success: true,
        error: false,
        message: 'Your quote request has been submitted successfully! We\'ll get back to you shortly.'
      });
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: true,
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="quote" className="bg-black p-8 rounded-3xl border border-gray-200 mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-black text-center">Request a Quote</h2>
      
      {submitStatus.success ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md mb-6">
          <p className="font-medium">{submitStatus.message}</p>
        </div>
      ) : null}
      
      {submitStatus.error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-6">
          <p className="font-medium">{submitStatus.message}</p>
        </div>
      ) : null}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500" 
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="storeUrl">Shopify Store URL</label>
          <input 
            type="text" 
            id="storeUrl"
            name="storeUrl"
            value={formData.storeUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500" 
            placeholder="https://your-store.myshopify.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="serviceType">Service Type</label>
          <select 
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" style={{ color: 'black' }}>Select a service</option>
            <option value="Theme Customization" style={{ color: 'black' }}>Theme Customization</option>
            <option value="Theme Update" style={{ color: 'black' }}>Theme Update</option>
            <option value="Performance Optimization" style={{ color: 'black' }}>Performance Optimization</option>
            <option value="Other" style={{ color: 'black' }}>Other (please specify)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="details">Project Details</label>
          <textarea 
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Tell us about your project requirements"
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="budget">Estimated Budget (USD)</label>
          <select 
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-white bg-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" style={{ color: 'black' }}>Select budget range</option>
            <option value="Below $500" style={{ color: 'black' }}>Below $500</option>
            <option value="$500 - $1,000" style={{ color: 'black' }}>$500 - $1,000</option>
            <option value="$1,000 - $2,000" style={{ color: 'black' }}>$1,000 - $2,000</option>
            <option value="Above $2,000" style={{ color: 'black' }}>Above $2,000</option>
            <option value="Not sure / Need consultation" style={{ color: 'black' }}>Not sure / Need consultation</option>
          </select>
        </div>
        
        <div className="mt-4">
          <button 
            type="submit" 
            className="inline-flex items-center bg-green-300 text-black px-4 py-2 rounded-full text-lg font-medium hover:bg-pink-400 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            <TfiArrowTopRight className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}