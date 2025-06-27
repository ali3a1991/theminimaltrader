import BackButton from '@/components/ui/BackButton';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isOrder: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'isOrder') {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
      return;
    }
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('sent');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', isOrder: false });
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col gap-4 items-center justify-center text-white px-4 py-20">
      <div className='self-start'>
        <BackButton/>
      </div>
      <div className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 -z-10 top-[-100px] left-[-300px]"
        style={{
          background: "radial-gradient(circle, #f59e42 0%, #000 60%, #6abcff 100%)"
        }}
      />
      <div className="relative z-10 w-full max-w-2xl p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact us</h2>

        <form
          className="grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              onChange={handleChange}
              value={formData.firstName}
              type="text"
              name="firstName"
              required
              placeholder="firstname"
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              onChange={handleChange}
              value={formData.lastName}
              type="text"
              name="lastName"
              required
              placeholder= "lastname"
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            required
            placeholder="email"
            className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            required
            placeholder="phone"
            className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex flex-row gap-2 ml-5 items-center">
            <input onChange={handleChange} type="checkbox" name='isOrder' id='isOrder' className='size-4'/>
            <label htmlFor="isOrder">Order</label>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 px-6 py-3 bg-red-600 rounded-md hover:bg-red-700 text-white font-semibold hover:scale-105 transition cursor-pointer"
          >
            Send
          </button>
          {status === 'sending' && <p className="text-yellow-400">Sending...</p>}
          {status === 'sent' && <p className="text-green-400">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
