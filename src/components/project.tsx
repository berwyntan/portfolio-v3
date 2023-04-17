import Link from "next/link";

export const Project = (props: { projectSlug: string }) => {
  const { projectSlug } = props;
  return (
    <div className="m-2 my-5 h-56 w-full flex-grow rounded border border-black p-2 md:max-w-xs">
      <Link href={`/project/${projectSlug}`}>
        <div className="h-56 w-full flex-grow md:max-w-xs">
          <img src="" alt="" />
          <h2 className="text-lg">{`title: ${projectSlug}`}</h2>

          <h4 className="font-mono text-sm">sub title</h4>
          <p>description</p>
        </div>
      </Link>
    </div>
  );
};
