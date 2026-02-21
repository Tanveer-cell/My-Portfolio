import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanveer | Biotechnology Graduate</title>
        <meta
          name="description"
          content="Biotechnology graduate focused on genomics, bioinformatics, and translational research."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <TransitionEffect/>
      <main className='relative flex items-center text-dark w-full min-h-screen overflow-hidden dark:text-light'>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="relative w-1/2 md:w-9/12">
              <Image
                src={profilePic}
                alt="Tanveer"
                className='w-9/12 h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Biotechnology Graduate. Turning Biology Into Scalable Solutions."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Focused on genomics, bioinformatics, and translational research. I build
                clean, data-informed narratives that connect wet-lab insights to real
                world impact.
              </p>
              <div className="flex items-center self-start mt-6 lg:self-center">
                <Link href="/dummy.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
                hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                //download={true}
                >Resume
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <a
                  href="mailto:tnv.641@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="idea" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
