import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import Navbar from "~/components/navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Berwyn Tan: Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Berwyn Tan: Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Navbar />
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default MyApp;
