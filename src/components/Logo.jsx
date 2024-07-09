import React from 'react'
import Image from 'next/image'

const Logo = ({ url='/logo.svg', width=135, height=60, className }) => {
  return (
    <Image
        src={url}
        alt="Logo"
        objectFit="cover"
        className={`w-[64px] lg:w-[135px] h-[30px] lg:h-[60px] ${className}`}
        width={width}
        height={height}
    />
  )
}

export default Logo