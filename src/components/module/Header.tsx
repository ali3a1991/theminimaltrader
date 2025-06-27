import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOpen(true) // Show header on scroll   
      } else {
        setIsOpen(false) // Hide header at the top
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    } 
  }, [])

  // Apply styles based on scroll state
  const headerClasses = `flex items-center w-screen p-4 fixed top-0 z-50${isOpen && ' shadow-lg backdrop-blur-md transition-all duration-300'}`
  return (
    <div className={headerClasses}>
      <div className='flex w-[100%] max-w-7xl mx-auto'>
        <div className="flex items-center gap-2">
          <Image src={'/logo-light.svg'} alt='Logo' width={20} height={20}/>
          <h1 className="text-2xl font-bold logo">The Minimal Trader</h1>
        </div>
      </div>
    </div>
  )
}
