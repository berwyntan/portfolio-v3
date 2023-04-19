import Image from "next/image";
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

  return (
    <div className="xs:max-w-xl card m-1 mb-5 h-96 w-full border border-gray-400 bg-gray-100 shadow-xl md:ml-2 md:max-w-md lg:max-w-xs">
      <Link href={`/project/${projectSlug}`}>
        <figure className="h-60">
          <Image src={preview} alt={header} height={400} width={400} />
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
