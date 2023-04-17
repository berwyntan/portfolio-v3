import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Hero } from "~/components/hero";
import { PageLayout } from "~/components/layout";
import { Navbar } from "~/components/navbar";
import { Project } from "~/components/project";

const Home: NextPage = () => {
  const data = ["0", "1", "2", "3", "groupbuy"];
  const projects = data.map((project) => {
    return <Project key={project} projectSlug={project} />;
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
        <div>Hello, welcome to my portfolio page.</div>

        <div className="flex-start flex flex-col md:flex-row md:flex-wrap">
          {projects}
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
