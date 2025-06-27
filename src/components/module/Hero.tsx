import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 relative min-h-screen">
      <div className="absolute w-[1200px] h-[1200px] rounded-full -z-10 top-[-500px] left-[-600px]"
        style={{
          background: "radial-gradient(circle, #F8A01B 0%, #0d0d0d 60%)"
        }}
      />
      <div className='absolute w-[1200px] h-[1200px] rounded-full opacity-70 -z-10 top-[-300px] left-[-600px] border-4'/>
      <div className="absolute w-[1200px] h-[1200px] rounded-full blur-3xl -z-10 bottom-[-100px] right-[-400px]"
        style={{
          background: "radial-gradient(circle, #67B7F8 0%, #0d0d0d 60%)"
        }}
      />
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build a life, <br /> not just a portfolio.
        </h1>
        <p className="text-lg mt-4">Trade less. Gain more.</p>
      </div>
      <div className="mt-10 lg:mt-0 text-center">
        <div className="max-w-[300px]">
          <Image src="/images/book.jpg" alt="Book" width={819} height={1280} priority />
        </div>
        <button
          style={{ zIndex: 10 }}
          onClick={() => router.push('/contact')}
          className="mt-4 px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition cursor-pointer"
        >
          ORDER NOW
        </button>
      </div>
    </section>
  )
}
