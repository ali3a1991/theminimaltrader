import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-20 px-6 text-white min-h-screen flex items-center justify-center">
      <div className="absolute left-[-20%] top-1/2 transform -translate-y-1/2 w-[150%] h-[150%] opacity-60"
        style={{
          background: "radial-gradient(circle, #F79F1B 0%, transparent 40%)",
          zIndex: -10,
        }}
      />
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md p-8 rounded-3xl backdrop-blur-md bg-white/10 text-left shadow-xl relative overflow-hidden neon-border">
          <div className="absolute right-[-68%] bottom-[-58%] w-[300%] h-[300%] opacity-50"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 40%)",
              zIndex: -10,
            }}
          />
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
        <div className="w-full md:w-[500px]">
          <Image
            src="/images/minimal-trader-phone.png"
            alt="Minimal Trader Book on Phone"
            width={539}
            height={360}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
