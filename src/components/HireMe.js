import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='w-44 h-44 flex items-center justify-center relative md:w-28 md:h-28'>
            <Image
              src="/images/svgs/biotech-orbit.svg"
              alt=""
              fill
              className="absolute inset-0 w-full h-full animate-spin-slow opacity-80 object-contain"
              sizes="(max-width: 768px) 112px, 176px"
              priority
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tnv.641@gmail.com"
              target="_blank"
              rel="noreferrer"
              className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[88px] h-[88px] rounded-full font-semibold hover:bg-light hover:text-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-[60px] md:h-[60px] md:text-[10px]'
            >
              Connect
            </a>
        </div>
    </div>
  )
}

export default HireMe
