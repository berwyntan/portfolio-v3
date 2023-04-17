import type { GetStaticProps } from "next";
import { PageLayout } from "~/components/layout";
import { Navbar } from "~/components/navbar";

const ProjectSinglePage = (props: { projectSlug: string }) => {
  
  return (
    <PageLayout>
      <Navbar />
      <div>{`ProjectSinglePage: ${props.projectSlug}`}</div>
    </PageLayout>
    
  );
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

export default ProjectSinglePage
