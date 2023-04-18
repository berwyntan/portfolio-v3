import type { GetStaticProps } from "next";
import projects from "data/projects";
import type { projectsType } from "data/projects";
import Link from "next/link";

const ProjectSinglePage = (props: {
  projectSlug: string;
  project: projectsType;
}) => {
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
  } = props?.project;
  return (
    <div className="p-5">
      <h1 className="my-1 text-2xl font-bold">{header}</h1>
      <h2 className="my-2 italic">{subHeader}</h2>
      <div>
        <img src={gif} alt={header} />
      </div>
      <p className="my-2">{desc1}</p>
      <p className="my-2">{desc2}</p>
      <p className="my-2">{desc3}</p>

      <div className="my-1 flex">
        <p className="mr-1 italic">Language:</p>
        <p className="">{language}</p>
      </div>

      <div className="my-1 flex flex-col">
        <p className="mr-1 italic">Tech stack:</p>
        <p className="">{techStack}</p>
      </div>
      <div className="my-4 flex gap-5">
        <div className="h-10 w-10">
          <Link href={appLink} target="_blank">
            <img
              src="https://berwyntanv2.vercel.app/assets/newTab-600daff5.png"
              alt="project link"
            />
          </Link>
        </div>
        <div className="h-10 w-10">
          <Link href={githubLink} target="_blank">
            <img
              src="https://berwyntanv2.vercel.app/assets/github-746a99c7.png"
              alt="github link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const projectSlug = context.params?.projectSlug;
  const project = projects?.find((proj) => proj.projectSlug === projectSlug);

  return {
    props: {
      projectSlug: projectSlug,
      project: project,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default ProjectSinglePage;
