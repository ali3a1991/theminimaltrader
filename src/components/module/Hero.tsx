import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 relative overflow-hidden min-h-screen">
      <div className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 -z-10 top-[-100px] left-[-100px]"
        style={{
          background: "radial-gradient(circle, #f59e42 0%, #000 60%, #6abcff 100%)"
        }}
      />
      <div className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 -z-10 bottom-[-100px] right-[-100px]"
        style={{
          background: "radial-gradient(circle, #6abcff 0%, #000 60%, #f59e42 100%)"
        }}
      />
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build a life, <br /> not just a portfolio.
        </h1>
        <p className="text-lg mt-4">Trade less. Gain more.</p>
      </div>
      <div className="mt-10 lg:mt-0 text-center">
        <Image src="/images/book.png" alt="Book" width={250} height={350} />
        <button onClick={() => router.push('/contact')} className="mt-4 px-6 py-2 bg-red-600 rounded-md hover:bg-red-700 transition cursor-pointer">
          ORDER NOW
        </button>
      </div>
    </section>
  )
}
