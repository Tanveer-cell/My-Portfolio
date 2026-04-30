import React, { useState } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import MathJaxWrapper from '@/components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '@/components/ExpandableSection';
import ScrollToTopArrow from '@/components/ScrolToTopArrow';
import TransitionEffect from '@/components/TransitionEffect';
import { handwrittenNotes, typedSections } from '@/data/notes';

const NotesPage = () => {
  const [openSection, setOpenSection] = useState(0);
  const [openSubsection, setOpenSubsection] = useState(null);

  const toggleSection = (sectionIndex) => {
    if (sectionIndex === openSection) {
      setOpenSection(null);
      setOpenSubsection(null);
      return;
    }

    setOpenSection(sectionIndex);
    setOpenSubsection(null);
  };

  const toggleSubsection = (subsectionIndex) => {
    setOpenSubsection((current) => (current === subsectionIndex ? null : subsectionIndex));
  };

  const processContent = (content) => <MathJaxWrapper content={content} />;

  return (
    <>
      <Head>
        <title>Tanveer | Notes</title>
        <meta
          name="description"
          content="Handwritten biology PDFs and typed study notes."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full pb-20 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Biology Notes Library"
            className="mb-8 !text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          />

          <section className="mt-14">
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold">Handwritten Notes</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 xl:grid-cols-1">
              {handwrittenNotes.map((note) => {
                const viewerUrl = `${note.url}#toolbar=0&navpanes=0&scrollbar=1`;

                return (
                  <article
                    key={note.slug}
                    className="rounded-3xl border border-dark bg-light p-6 shadow-[10px_10px_0_0_#1b1b1b] dark:border-light dark:bg-dark dark:shadow-[10px_10px_0_0_#f5f5f5] sm:p-4"
                  >
                    <div className="flex h-full flex-col">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                            {note.subject}
                          </span>
                        </div>

                        <h3 className="mt-4 text-3xl font-bold sm:text-2xl">{note.title}</h3>
                        <p className="mt-3 text-base text-dark/75 dark:text-light/75">
                          {note.description}
                        </p>
                      </div>

                      <div className="mt-6 overflow-hidden rounded-2xl border border-dark/15 bg-white shadow-inner dark:border-light/15">
                        <iframe
                          title={`${note.title} preview`}
                          src={viewerUrl}
                          className="h-[420px] w-full"
                        />
                      </div>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <a
                          href={viewerUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition hover:-translate-y-0.5 dark:border-light dark:bg-light dark:text-dark"
                        >
                          Open Viewer
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-6">
              <div>
                <h2 className="text-3xl font-bold">Typed Notes</h2>
              </div>
            </div>

            <div className="rounded-3xl border border-dark bg-light p-6 shadow-[10px_10px_0_0_#1b1b1b] dark:border-light dark:bg-dark dark:shadow-[10px_10px_0_0_#f5f5f5] sm:p-4">
              {typedSections.map((section, index) => (
                <ExpandableSection
                  key={section.title}
                  title={processContent(`${index + 1}. ${section.title}`)}
                  isOpen={openSection === index}
                  toggle={() => toggleSection(index)}
                  hasSubsections={section.subsections && section.subsections.length > 0}
                >
                  {section.subsections?.map((subsection, subIndex) => (
                    <Subsection
                      key={subsection.title}
                      title={processContent(`${index + 1}.${subIndex + 1} ${subsection.title}`)}
                      isOpen={openSubsection === subIndex && openSection === index}
                      toggle={() => toggleSubsection(subIndex)}
                    >
                      {processContent(subsection.content)}
                    </Subsection>
                  ))}
                </ExpandableSection>
              ))}
            </div>
          </section>
        </Layout>
      </main>

      <ScrollToTopArrow />
    </>
  );
};

export default NotesPage;
