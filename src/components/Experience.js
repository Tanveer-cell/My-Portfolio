import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
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
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            {Array.isArray(work) ? (
                <ul className='mt-2 list-disc pl-5 font-medium w-full md:text-sm'>
                    {work.map((item, idx) => (
                        <li key={idx} className='mb-1'>
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            )}
        </motion.div>
    </li>
    );
};

const Experience = () => {
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
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div style={{scaleY: scrollYProgress}} 
            className='absolute left-9 top-6 w-[4px] h-[calc(100%-24px)] bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] md:top-5 md:h-[calc(100%-20px)] xs:left-[20px] xs:top-4 xs:h-[calc(100%-16px)]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    position="Multi-Modal Neural Network for Tissue Classification"
                    company="IISER Kolkata"
                    companyLink="https://www.iiserkol.ac.in/"
                    time="January 2026 – July 2026"
                    address="Kolkata, India"
                    work={[
                        "Built an end-to-end tissue image classification pipeline using CNNs for automated feature extraction from microscopy images.",
                        "Developed a physics-informed segmentation workflow (multi-Otsu thresholding, watershed labeling, Delaunay-based graphs) to compute morphological descriptors.",
                        "Designed a hybrid multi-input network combining CNN embeddings with engineered geometric features to improve accuracy and generalization.",
                        "Guide: Dr. Dipjyoti Das (Associate Professor).",
                    ]}
                />
                <Details 
                    position="Terahertz Spectroscopy of Glucose"
                    company="IISER Kolkata"
                    companyLink="https://www.iiserkol.ac.in/"
                    time="January 2025 – July 2025"
                    address="Kolkata, India"
                    work={[
                        "Prepared glucose samples in polystyrene pellets and performed terahertz time-domain measurements.",
                        "Extracted optical properties to estimate minimum detectable glucose concentration.",
                        "Evaluated terahertz spectroscopy as a non-invasive biosensing method.",
                        "Guide: Prof. Kamaraju Natarajan.",
                    ]}
                />
                <Details 
                    position="Stepper Motor Rotator for Polarization Control"
                    company="IISER Kolkata"
                    companyLink="https://www.iiserkol.ac.in/"
                    time="June 2024 – July 2024"
                    address="Kolkata, India"
                    work={[
                        "Designed a wireless-controlled stepper motor rotator for 1-inch and 2-inch polarization rotators.",
                        "Built a control application to monitor device operation and environmental conditions.",
                        "Additional work: AC current detection with alarms and gear-based torque enhancement.",
                        "Guide: Prof. Kamaraju Natarajan.",
                    ]}
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
