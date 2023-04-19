import type { GetStaticProps } from "next";
import projects from "data/projects";
import type { projectsType } from "data/projects";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectSinglePage = (props: {
  projectSlug: string;
  project: projectsType;
}) => {

  if (!props.project) return (
    <div>Loading...</div>
  )
  
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
    <div className="flex flex-col items-center p-5">
      <div className="mb-3 flex items-end justify-between md:w-10/12">
        <div className="flex flex-col">
          <h1 className="my-1 text-2xl font-bold">{header}</h1>
          <h2 className="italic">{subHeader}</h2>
        </div>
        <div className="ml-10 flex gap-5">
          <div className="h-8 w-8 border-b-2 border-dotted border-gray-500 p-1">
            <Link href={appLink} target="_blank">
              <img
                src="https://berwyntanv2.vercel.app/assets/newTab-600daff5.png"
                alt="project link"
              />
            </Link>
          </div>
          <div className="h-8 w-8 border-b-2 border-dotted border-gray-500 p-1">
            <Link href={githubLink} target="_blank">
              <img
                src="https://berwyntanv2.vercel.app/assets/github-746a99c7.png"
                alt="github link"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={gif} alt={header} />
      </div>

      <div className="flex w-10/12 flex-col items-start">
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectSlug = context.params?.projectSlug;
  if (!projectSlug || Array.isArray(projectSlug)) return {
    notFound: true
  }
  // to fetch projects json from a DB
  const rawData = await fetch(
    `https://nextjs-course-40339-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json`)
  
  if (!rawData) return {
    notFound: true
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: projectsType = await rawData.json();
  
  const project = data?.find((proj: { projectSlug: string; }) => proj.projectSlug === projectSlug);

  return {
    props: {
      projectSlug: projectSlug,
      project: project,
    },
    revalidate: 86400
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProjectSinglePage;
