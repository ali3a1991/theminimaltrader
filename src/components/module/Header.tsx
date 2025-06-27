import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()

  // Navigation items
  const navItams = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    //{ name: 'About', href: '/about' },
    //{ name: 'Blog', href: '/blog' },
  ]

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
  const headerClasses = `flex items-baseline justify-between w-screen p-4 fixed top-0${isOpen && ' shadow-lg backdrop-blur-2xl transition-all duration-300'}`
  return (
    <div className={headerClasses} style={{ zIndex: 1000 }}>

      <div className='flex w-[100%] max-w-7xl mx-auto'>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
          <Image src={'/logo-light.svg'} alt='Logo' width={20} height={20}/>
          <h1 className="text-2xl font-bold logo">The Minimal Trader</h1>
        </div>
      </div>

      <nav>
        <ul className="flex items-center gap-6 p-4 md:pr-[200px]">
          {navItams.map((item) => (
            <li key={item.name}>
              <button className="font-medium hover:underline transition-colors duration-200 cursor-pointer" onClick={() => router.push(item.href)} style={router.pathname === item.href ? { textDecoration: 'underline' } : {} }>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  )
}
