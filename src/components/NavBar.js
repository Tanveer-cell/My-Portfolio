import Link from 'next/link'
import Logo from "@/components/Logo";
import Icons, { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "@/components/Icons";
import React from 'react'
import { useRouter } from 'next/router';

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header
    className="w-full px-32 py-8 font-medium flex items-center justify-between"
    >
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>
        </nav>
        
        <nav className='flex flex-row space-x-6'>
            <Link href="/" target={"_blank"}>
              <TwitterIcon />
            </Link>
            <Link href="/" target={"_blank"}>
              <GithubIcon />
            </Link>
            <Link href="/" target={"_blank"}>
              <LinkedInIcon />
            </Link>
            <Link href="/" target={"_blank"}>
              <PinterestIcon />
            </Link>
            <Link href="/" target={"_blank"}>
              <DribbbleIcon/>
            </Link>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
    </header>
  )
}

export default NavBar