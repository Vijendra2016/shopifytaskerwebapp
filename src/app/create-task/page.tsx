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
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
  <br /><br /><br /><br />

  <label htmlFor="name">Name</label><br />
  <input
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Name"
    required
  />
  <br /><br />

  <label htmlFor="email">Email</label><br />
  <input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    required
  />
  <br /><br />

  <label htmlFor="message">Message</label><br />
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Message"
    required
  />
  <br /><br />

  <button type="submit">Send</button>
  <p>{status}</p>
</form>

  );
}

