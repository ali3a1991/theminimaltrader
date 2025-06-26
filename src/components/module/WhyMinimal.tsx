import React from 'react'
import Lightbox from './Lightbox'

export default function WhyMinimal() {
  const sections = [
    {
      title: 'Simple by Design',
      text: 'Minimal tools. Clear structure. No distractions.',
    },
    {
      title: 'Progress You Can See',
      text: 'Track your wins and losses. Spot patterns. Improve every week.',
    },
    {
      title: 'Low Risk. Real Growth.',
      text: 'Designed for long-term capital protection and compounding.',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      <div className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl opacity-30 -z-10 bottom-[-400px] left-[50px]"
        style={{
          background: "radial-gradient(circle, #6abcff 0%, #000 80%, #f59e42 100%)"
        }}
      />
      <h2 className="text-4xl font-bold mt-20 w-[30%]">Why Minimal Works</h2>
      <div className='absolute top-[50%] right-[-50px] w-[70%] translate-y-[-50%] '>
        <Lightbox>
          <div className="grid md:grid-rows-3 gap-30 p-10">
            {sections.map((item) => (
              <div key={item.title} >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </Lightbox>
      </div>
      
    </section>
  )
}
