import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-12 md:pt-24 pb-8 md:pb-16'>
        <div className="container mx-auto max-w-[1280px] px-4">
            <SocialMedia />
            <ul className="grid grid-cols-12 gap-6">
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Privacy Policy</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Corporate Information</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Cookie preferences</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Contact Us</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Corporate Information</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Privacy Policy</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Contact Us</Link>
                </li>
                <li className="col-span-6 md:col-span-3">
                    <Link href={'#'}>Cookie preferences</Link>
                </li>
            </ul>
           <p className='text-xs leading-[25px] md:text-2xl md:leading-[50px] pt-16 md:pt-32'>© Alkye Test</p>
        </div>
    </footer>
  )
}

export default Footer