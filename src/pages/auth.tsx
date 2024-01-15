import { AuthForm } from "@components/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (session) {
  //         router.replace('/');
  //       } else {
  //         setIsLoading(false);
  //       }
  //     });
  //   }, [router]);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   return <AuthForm />;
  return <AuthForm />;
}

export default AuthPage;
