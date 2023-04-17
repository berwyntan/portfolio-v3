import Link from "next/link";
interface ProjectProps {
  projectSlug: string;
  preview: string;
  header: string;
  subHeader: string;
  language: string;
}

export const Project = (props: ProjectProps) => {
  const { projectSlug, preview, header, subHeader, language } = props;
  console.log(props);
  return (
    // <div className="m-2 my-5 h-56 w-full flex-grow rounded border border-black p-2 md:max-w-xs">
    //   <Link href={`/project/${projectSlug}`}>
    //     <div className="h-56 w-full flex-grow md:max-w-xs">
    //       <img src="" alt="" />
    //       <h2 className="text-lg">{`title: ${projectSlug}`}</h2>

    //       <h4 className="font-mono text-sm">sub title</h4>
    //       <p>description</p>
    //     </div>
    //   </Link>
    // </div>
    <div className="xs:max-w-xl card m-1 mb-5 h-96 w-full border border-gray-400 bg-gray-100 shadow-xl md:ml-2 md:max-w-md lg:max-w-xs">
      <Link href={`/project/${projectSlug}`}>
        <figure className="h-60">
          <img src={preview} alt={header} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{header}</h2>
          <div className="flex items-baseline justify-between">
            <p className="text">{subHeader}</p>
            <p className="left-0 font-mono text-sm">{language}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
