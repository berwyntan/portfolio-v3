import type { GetStaticProps } from "next";
import projects from "data/projects";
import type { projectsType } from "data/projects";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const PrevButton = (props: { prevSlug: string }) => {
  if (props.prevSlug === "") {
    return <div></div>;
  }

  return (
    <Link href={`/project/${props.prevSlug}`}>
      <button className="btn-outline btn-circle btn">
        <div className="h-5 w-5">
          <Image
            src="https://res.cloudinary.com/dkilrhnk7/image/upload/v1681899718/left-arrow_x5k4uh.png"
            alt="prev"
            width={50}
            height={50}
          />
        </div>
      </button>
    </Link>
  );
};

const NextButton = (props: { nextSlug: string }) => {
  if (props.nextSlug === "") {
    return <div></div>;
  }
  return (
    <Link href={`/project/${props.nextSlug}`}>
      <button className="btn-outline btn-circle btn">
        <div className="h-5 w-5">
          <Image
            src="https://res.cloudinary.com/dkilrhnk7/image/upload/v1681899718/right-arrow_fzkog1.png"
            alt="next"
            width={50}
            height={50}
          />
        </div>
      </button>
    </Link>
  );
};

const ProjectSinglePage = (props: {
  projectSlug: string;
  project: projectsType;
}) => {
  if (!props.project || !props.projectSlug) return <div>Loading...</div>;

  const {
    techStack,
    gif,
    header,
    subHeader,
    desc1,
    desc2,
    desc3,
    appLink,
    githubLink,
    language,
    prevSlug,
    nextSlug,
  } = props?.project;

  return (
    <>
      <Head>
        <title>{`Berwyn's Project: ${header}`}</title>
        <meta
          name="description"
          content="Portfolio of Berwyn Tan: Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center p-5">
        <div className="mb-3 flex items-end justify-between md:w-10/12">
          <div className="flex flex-col">
            <h1 className="my-1 text-2xl font-bold">{header}</h1>
            <h2 className="italic">{subHeader}</h2>
          </div>
          <div className="ml-10 flex gap-5">
            <div className="h-9 w-9 border-b-2 border-dotted border-gray-500 p-1">
              <Link href={appLink} target="_blank">
                <Image
                  src="https://berwyntanv2.vercel.app/assets/newTab-600daff5.png"
                  alt="project link"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="h-9 w-9 border-b-2 border-dotted border-gray-500 p-1">
              <Link href={githubLink} target="_blank">
                <Image
                  src="https://berwyntanv2.vercel.app/assets/github-746a99c7.png"
                  alt="github link"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center overflow-hidden object-cover">
          <img src={gif} alt={header} />
        </div>

        <div className="flex w-11/12 md:w-10/12 flex-col items-start">
          <div className="my-2 mt-3 flex flex-col">
            <p className="mr-1 font-light italic">Language:</p>
            <p className="">{language}</p>
          </div>

          <div className="my-2 flex flex-col">
            <p className="mr-1 font-light italic">Tech stack:</p>
            <p className="">{techStack}</p>
          </div>

          <div className="my-2 flex flex-col">
            <p className="mr-1 font-light italic">What&apos;s it about:</p>
            <p className="mb-1">{desc1}</p>
            <p className="mb-1">{desc2}</p>
            <p className="mb-4">{desc3}</p>
          </div>
        </div>
        <div className="flex items-center justify-around md:w-4/12">
          <PrevButton prevSlug={prevSlug} />
          <span className="font-light mx-2">More Projects</span>
          <NextButton nextSlug={nextSlug} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const projectSlug = context.params?.projectSlug;
  if (!projectSlug || Array.isArray(projectSlug))
    return {
      notFound: true,
    };
  // to fetch projects from data/projects.ts
  const project = projects?.find(
    (proj: { projectSlug: string }) => proj.projectSlug === projectSlug
  );

  return {
    props: {
      projectSlug: projectSlug,
      project: project,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProjectSinglePage;
