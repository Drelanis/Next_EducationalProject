import { WelcomePage } from "@components/welcome";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="next auth training" />
      </Head>
      <WelcomePage />
    </>
  );
};

export default Home;
