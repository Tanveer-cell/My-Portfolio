import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/biotech-cover.jpg"
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project =({title, type, img, link, github}) => {
  return(
    <article className=' w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
    dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Tanveer | Projects</title>
            <meta name='description' content="any description" />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            
            <ul className='w-full flex flex-col gap-6'>
              <li className='relative w-full rounded-2xl border border-solid border-dark bg-light p-5 dark:border-light dark:bg-dark'>
                <div className='flex items-start gap-6 sm:flex-col'>
                  <Link
                    href="https://tanveer-portfolio-prime.vercel.app/"
                    target="_blank"
                    className='block w-40 shrink-0 overflow-hidden rounded-xl border border-dark/10 dark:border-light/20'
                  >
                    <FramerImage
                      src={project1}
                      alt="Portfolio Website"
                      className="h-24 w-full object-cover sm:h-40"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold uppercase tracking-wide text-primary dark:text-primaryDark'>
                      Featured Project
                    </div>
                    <Link href="https://tanveer-portfolio-prime.vercel.app/" target="_blank" className='block'>
                      <h2 className='text-2xl font-bold hover:underline underline-offset-2'>
                        Portfolio Website
                      </h2>
                    </Link>
                    <p className='mt-2 text-sm text-dark/80 dark:text-light/80'>
                      Responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion. Optimized for performance and SEO, deployed on Vercel.
                    </p>
                    <div className='mt-4 flex items-center gap-4'>
                      <Link href="https://github.com/Tanveer-cell/My-Portfolio" target="_blank" className='w-8'>
                        <GithubIcon/>
                      </Link>
                      <Link href="https://tanveer-portfolio-prime.vercel.app/" target="_blank" className='text-sm font-semibold underline'>
                        Visit
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className='mt-24 w-full'>
              <h2 className='mb-8 text-3xl font-bold text-dark dark:text-light'>In Progress</h2>
              <ul className='w-full flex flex-col gap-6'>
                <li className='relative w-full rounded-2xl border border-dashed border-dark/40 bg-light p-5 dark:bg-dark dark:border-light/40'>
                  <div className='flex items-start gap-6 sm:flex-col'>
                    <div className='block w-40 shrink-0 overflow-hidden rounded-xl border border-dark/10 dark:border-light/20'>
                      <FramerImage
                        src={project1}
                        alt="Computer Quiz App"
                        className="h-24 w-full object-cover sm:h-40"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <div className='flex-1'>
                      <div className='text-sm font-semibold uppercase tracking-wide text-primary dark:text-primaryDark'>
                        In Progress
                      </div>
                      <h3 className='text-2xl font-bold text-dark dark:text-light'>Computer Quiz App</h3>
                      <p className='mt-2 text-sm text-dark/80 dark:text-light/80'>
                        Desktop quiz app built with Java and NetBeans, using Oracle DBMS for data storage. Not yet published on GitHub.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </Layout>
        </main>
    </>
  )
}

export default projects
