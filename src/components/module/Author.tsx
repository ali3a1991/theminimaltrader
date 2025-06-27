import React from 'react'
import Image from 'next/image'

export default function Author() {
  return (
    <section className="py-20 flex flex-col md:flex-row gap-30 items-center justify-between min-h-screen relative">
      <div className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-30 -z-10 top-[-100px] left-[-300px]"
        style={{
          background: "radial-gradient(circle, #f59e42 0%, #000 60%, #6abcff 100%)"
        }}
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">Meet the Minimalist</h2>
        <p className="text-gray-300">
          I am Pouria Masoumy — creator of the Minimal Trader method.
          With just $500 and a system, I turned trading into a path to financial freedom.
        </p>
      </div>
      <div className="text-center max-w-[300px]">
        <Image src="/images/author.jpg" alt="Author" width={960} height={1280} className="rounded-full" />
      </div>
    </section>
  )
}
