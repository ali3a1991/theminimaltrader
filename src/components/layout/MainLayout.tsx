import React from 'react'
import Header from '../module/Header'
import Footer from '../module/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header/>
      <div className='min-h-[calc(100vh-80px)] '>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
