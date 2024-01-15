import { UserProfile } from "@components/profile";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const ProfilePage = () => {
  return <UserProfile />;
};

export default ProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //   const session = await getSession({ req: context.req });
  //   if (!session) {
  //     return {
  //       redirect: {
  //         destination: "/auth",
  //         permanent: false,
  //       },
  //     };
  //   }
  return {
    props: { session: true },
  };
};
