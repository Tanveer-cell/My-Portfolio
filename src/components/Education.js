import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[66%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        className='w-full text-left'
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full'>

            <motion.div style={{scaleY: scrollYProgress}} 
            className='absolute left-9 top-6 w-[4px] h-[calc(100%-24px)] bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] md:top-5 md:h-[calc(100%-20px)] xs:left-[20px] xs:top-4 xs:h-[calc(100%-16px)]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4  xs:ml-2'>
                <Details 
                    type="B.Tech in Biotechnology"
                    time="December 2021 – July 2025"
                    place="Haldia Institute of Technology, India"
                    info="GPA: 8.19/10.0 | Relevant coursework: Biochemistry, Molecular Biology, Microbiology, Immunology"
                />

                <Details 
                    type="Senior School Certificate Examination"
                    time="2019 – 2020"
                    place="Devasthaly Vidyapeeth, Uttar Pradesh, India"
                    info="Percentage: 71.4% | Relevant coursework: Physics, Chemistry, Mathematics, Computer Science"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education
