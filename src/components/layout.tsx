import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="xs:p-6 h-full w-full border-slate-400 p-1 lg:max-w-5xl bg-slate-100">
        {props.children}
      </div>
    </main>
  );
};
