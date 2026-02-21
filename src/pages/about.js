import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
  return (
    <>
        <Head>
            <title>Tanveer | About</title>
            <meta name='description' content="any description" />
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='flex w-full max-w-6xl mx-auto items-start gap-10 md:flex-col md:items-center'>
                    <div className='flex-1'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-center'>About</h2>
                        <div className="text-base font-medium text-dark/80 dark:text-light/80 leading-relaxed md:text-center after:content-[''] after:block after:clear-both">
                            <div className='float-left mr-6 mb-4 w-fit md:float-none md:mx-auto md:mb-6'>
                                <div className='relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light w-fit'>
                                    <div className='absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-[2rem] bg-dark dark:bg-light' />
                                    <div className='w-[260px] overflow-hidden rounded-2xl aspect-[3/4]'>
                                      <Image src={profilePic} alt="Tanveer" className='w-full h-full object-cover'
                                      priority
                                      sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 260px"
                                      />
                                    </div>
                                </div>
                            </div>
                            <p>
                                I&apos;m Tanveer, a B.Tech Biotechnology graduate from Haldia Institute of Technology, India. I work at the intersection of computation and biology, with a focus on designing biosensing and diagnostic tools.
                            </p>

                            <p className='my-4'>
                                My interests include biotechnology, bioinformatics, biophysical instrumentation, and molecular diagnostics, with an emphasis on integrating AI/ML into experimental and analytical workflows.
                            </p>

                            <p>
                                I&apos;m seeking advanced research opportunities to further these interests and contribute to innovative solutions in life sciences.
                            </p>
                        </div>
                    </div>

                    <div className='w-px self-stretch bg-dark/20 dark:bg-light/20 md:hidden' />
                    <div className='hidden md:block h-px w-2/3 bg-dark/20 dark:bg-light/20' />

                    <div className='w-64 md:w-full'>
                        <Skills compact />
                    </div>
                </div>
                <Experience/>
                <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about
