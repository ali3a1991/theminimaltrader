import React from 'react'

export default function Contact() {
  return (
    <section className="py-20 bg-black grid md:grid-cols-2 gap-10 p-10 rounded-tr-4xl rounded-tl-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
      </div>
      <div className="space-y-2 text-gray-300">
        <div>Phone: (123) 456-7890</div>
        <div>Email: hello@reallyminimal.com</div>
        <div>Social: <a href="#" className="underline">Facebook</a> | <a href="#" className="underline">Instagram</a></div>
      </div>
    </section>
  )
}
