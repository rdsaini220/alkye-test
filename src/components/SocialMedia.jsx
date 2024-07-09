import React from 'react'
import Image from 'next/image'

const iconList = [
    {
        id:1,
        title: 'facebook',
        icon: '/facebook.svg',
        link:'#'
    },
    {
        id:2,
        title: 'instagram',
        icon: '/instagram.svg',
        link:'#'
    },
    {
        id:3,
        title: 'twitter',
        icon: '/twitter.svg',
        link:'#'
    },
    {
        id:4,
        title: 'twitch',
        icon: '/twitch.svg',
        link:'#'
    },
    {
        id:5,
        title: 'youtube',
        icon: '/youtube.svg',
        link:'#'
    },
]

const SocialMediaItem = ({ item }) => {
    return (
    <li>
        <a href="#" target='_'>
            <Image
                src={item.icon}
                alt={item.title}
                objectFit="cover"
                className='w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]'
                width={50}
                height={50}
            />
        </a>
    </li>
    )
  }

const SocialMedia = () => {
  return (
    <ul className='flex gap-x-6 md:gap-x-12 mb-10 md:mb-20'>
        {
            iconList.map((item) => {
                return <SocialMediaItem key={item.id} item={item} />
            })
        }
    </ul>
  )
}

export default SocialMedia