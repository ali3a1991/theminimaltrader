import Image from 'next/image'
import React from 'react'

export default function Facebook() {
  return (
    <Image
      src="/icons/facebook.svg"
      alt="Facebook"
      width={24}
      height={24}
      style={{ display: "inline-block"}}
    />
  )
}
