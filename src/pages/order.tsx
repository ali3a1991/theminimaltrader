import React, { useState } from 'react';
import BackButton from '@/components/ui/BackButton';

export default function Order() {
  const formInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    postCode: '',
    city: '',
    street: '',
    houseNumber: '',
  };

  const [formData, setFormData] = useState(formInitialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setFormData(formInitialState);
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
      <div className='flex flex-col md:flex-row items-center justify-between gap-15'>
        <p className="w-[100%] md:w-[50%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="relative z-10 w-full max-w-2xl p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-bold mb-6 text-center">Order</h2>

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
              name="phoneNumber"
              required
              placeholder="phone number"
              className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                onChange={handleChange}
                value={formData.postCode}
                type="text"
                name="postCode"
                required
                placeholder="post code"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                onChange={handleChange}
                value={formData.city}
                type="text"
                name="city"
                required
                placeholder="city"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                onChange={handleChange}
                value={formData.street}
                type="text"
                name="street"
                required
                placeholder="street"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                onChange={handleChange}
                value={formData.houseNumber}
                type="text"
                name="houseNumber"
                required
                placeholder="house number"
                className="bg-transparent border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-4 px-6 py-3 bg-[#fe5157] rounded-md hover:bg-red-700 text-white font-semibold hover:scale-105 transition cursor-pointer"
            >
              Send
            </button>
            {status === 'sending' && <p className="text-yellow-400">Sending...</p>}
            {status === 'sent' && <p className="text-green-400">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

