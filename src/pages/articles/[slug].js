import React from "react";
import Head from "next/head";
import { remark } from "remark";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { articles } from "@/data/articles";

const ArticlePage = ({ article, contentHtml }) => {
  if (!article) return null;

  return (
    <>
      <Head>
        <title>Tanveer | {article.title}</title>
        <meta name="description" content={article.summary} />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={article.title}
            className="mb-10 lg:!text-6xl sm:mb-6 sm:!text-5xl xs:!text-4xl"
          />
          <div className="w-full max-w-4xl">
            <div className="mt-6 flex flex-wrap items-center justify-between text-sm text-dark/70 dark:text-light/70">
              <span>{article.date}</span>
              <span>{article.time}</span>
            </div>
            <p className="mt-6 text-lg leading-relaxed">{article.summary}</p>
            <div
              className="prose mt-8 max-w-none text-base leading-relaxed dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: articles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const article = articles.find((item) => item.slug === params.slug) || null;
  const contentHtml = article
    ? (
        await remark()
          .use(remarkMath)
          .use(remarkRehype)
          .use(rehypeKatex)
          .use(rehypeStringify)
          .process(article.content)
      ).toString()
    : "";

  return {
    props: {
      article,
      contentHtml,
    },
  };
};

export default ArticlePage;
