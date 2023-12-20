import React from 'react';
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import MarkdownWithKaTeX from '@/components/MarkdownWithKaTeX';

const differentialGeometry = () => {
  const content = `
    Differential Geometry. Here is an example of inline KaTeX $\\int_{a}^{b} f(x) \\,dx$. And a block KaTeX: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$
  `;

  return (
    <>
      <Head>
        <title>Tanveer | About</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <MarkdownWithKaTeX content={content} />
        </Layout>
      </main>
    </>
  );
};

export default differentialGeometry;
