import Head from 'next/head'
import React from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>The Minimal Trader</title>
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </>
  )
}
