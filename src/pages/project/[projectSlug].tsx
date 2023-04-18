import type { GetStaticProps } from "next";
import projects from "data/projects";
import type { projectsType } from "data/projects";
import Link from "next/link";
import { useRouter } from "next/router";

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

  // const router = useRouter();
  // console.log(router.query.projectSlug);
  // // const projectSlug: string = router.query.projectSlug;
  // const projectSlug: string = props.projectSlug;
  // const project = projects?.find(
  //   (proj) => proj.projectSlug === projectSlug
  // );

  // const {
  //   techStack,
  //   gif,
  //   header,
  //   subHeader,
  //   desc1,
  //   desc2,
  //   desc3,
  //   appLink,
  //   githubLink,
  //   language,
  // } = project;
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

export const getStaticProps: GetStaticProps = (context) => {
  const projectSlug = context.params?.projectSlug;
  // to fetch projects json from a DB
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
