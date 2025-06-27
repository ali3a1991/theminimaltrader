import Image from 'next/image'
import React from 'react'

export default function Instagram() {
  return (
    <Image
      src="/icons/instagram.svg"
      alt="Instagram"
      width={24}
      height={24}
      style={{ display: "inline-block"}}
    />
  )
}
