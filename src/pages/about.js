import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref, {once: true});
    
    useEffect (() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    
    useEffect(() => {
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    
    return <span  ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Tanveer | About Page</title>
            <meta name='description' content="any description" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About</h2>
                        <p className='font-medium'>
                            Hi, I&apos;m Tanveer, a 3<sup>rd</sup> year Biotechnology student at Haldia Institute of Technology, Haldia, West Bengal, India. I have keen interest in Science and Technology and always enthusiastic about trying and learning new things to expand my knowledge and understant the world around me in a better way.
                        </p>

                        <p className='my-4 font-medium'>
                            I believe that combining technology and innovation with life will lead us to a better future and make us evolve as a species.
                        </p>

                        <p className='font-medium'>
                            Currently I&apos;m working on developing my skills in field of Mathematics, Computer Science and Biotechnology so I can apply those concepts to real world problems and to solve them in most efiicient manner and provide something valueable to the people.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="Tanveer" className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Template</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={1} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of experience</h2>
                        </div>

                    </div>
                </div>
                <Skills/>
                <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about