import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Hero } from "~/components/hero";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";
import { Project } from "~/components/project";
import projects from "data/projects";

const Home: NextPage = () => {
  const data = ["0", "1", "2", "3", "groupbuy"];
  const projectCards = projects.map((project) => {
    return (
      <Project
        key={project.projectSlug}
        projectSlug={project.projectSlug}
        preview={project.preview}
        header={project.header}
        subHeader={project.subHeader}
        language={project.language}
      />
    );
  });
  return (
    <>
      <Head>
        <title>Berwyn Tan</title>
        <meta name="description" content="Portfolio: Berwyn Tan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Navbar />
        <Hero />

        <div className="flex-start mt-8 flex flex-col p-1 md:flex-row md:flex-wrap">
          {projectCards}
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
