import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-20 px-6 text-white min-h-screen flex items-center justify-center">
      <div className="absolute left-[-20%] top-1/2 transform -translate-y-1/2 w-[150%] h-[150%] opacity-60"
        style={{
          background: "radial-gradient(circle, #F79F1B 0%, transparent 40%)"
        }}
      ></div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md p-8 rounded-3xl border border-white/20 backdrop-blur-md bg-white/10 text-left shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 leading-snug">
            What is The <br />
            <span className="font-light">Minimal Trader?</span>
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Minimal Trader is a book, a system, and a mindset. <br />
            It’s for traders who want to grow without stress, noise, or hype.
            <br />
            Whether you’re a part-time trader or just starting out, this
            approach helps you focus on consistency — not chaos.
          </p>
        </div>
        <div className="w-full md:w-[300px]">
          <Image
            src="/images/minimal-trader-phone.jpg"
            alt="Minimal Trader Book on Phone"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
