import { type NextPage } from "next";
import Head from "next/head";
import { Hero } from "~/components/hero";
import { Project } from "~/components/project";
import projects from "data/projects";

const Home: NextPage = () => {
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
        <title>Berwyn&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Berwyn Tan: Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className="flex-start mt-8 flex flex-col p-1 md:flex-row md:flex-wrap md:justify-center">
        {projectCards}
      </div>
    </>
  );
};

export default Home;
