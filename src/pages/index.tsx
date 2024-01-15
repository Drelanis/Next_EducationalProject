import Head from "next/head";
import { Notification } from "src/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Denys Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <h1>Hello world!</h1>
    </>
  );
};

export default Home;
