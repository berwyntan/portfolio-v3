import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full  border-slate-400 lg:max-w-5xl p-1 xs:p-6">
        {props.children}
      </div>
    </main>
  );
};
