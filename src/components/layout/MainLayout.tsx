import Head from 'next/head'
import React from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>The Minimal Trader</title>
      </Head>
      <main className="w-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  )
}
