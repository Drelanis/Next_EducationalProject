import { Layout } from "@components/layout";
import { SessionProvider } from "next-auth/react";

import "@styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default App;
