import React from 'react'
import { Mail, Phone } from 'lucide-react'
import Instagram from '../ui/Instagram'
import Facebook from '../ui/Facebook'

export default function Contact() {
  return (
    <section className="py-20 bg-black grid md:grid-cols-2 gap-10 p-10 rounded-tr-4xl rounded-tl-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
      </div>
      <div className="space-y-2 text-gray-300">
        <div className='flex items-center gap-2'>
          <Phone/> 
          <p>(+49) 123456789</p>
        </div>
        <div className='flex items-center gap-2'>
          <Mail/>
          <p>info@theminimaltrader.com</p>
        </div>
        <div className='flex items-center gap-2'>
          <a href="#" className="underline"><Facebook/></a>
          | 
          <a href="#" className="underline"><Instagram /></a>
        </div>
      </div>
    </section>
  )
}
