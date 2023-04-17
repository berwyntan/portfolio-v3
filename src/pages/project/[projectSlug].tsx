import type { GetStaticProps } from "next";

const ProjectSinglePage = (props: { projectSlug: string }) => {
  return <div>{`ProjectSinglePage: ${props.projectSlug}`}</div>;
};

export const getStaticProps: GetStaticProps = (context) => {
  const projectSlug = context.params?.projectSlug;
  return {
    props: {
      projectSlug: projectSlug,
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
