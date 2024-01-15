import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";
import { createUser } from "./utils";

export const useLogic = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const getLoginButton = () => setIsLogin(true);

  const getCreateAccountButton = () => setIsLogin(false);

  const submitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    console.log(process.env.MONGODB_URL);

    // const enteredEmail = emailInputRef?.current?.value || "";
    // const enteredPassword = passwordInputRef?.current?.value || "";

    // if (isLogin) {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   });

    //   if (!result!.error) {
    //     router.replace("/profile");
    //   }
    // } else {
    //   try {
    //     const result = await createUser(enteredEmail, enteredPassword);
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return {
    isLogin,
    emailInputRef,
    passwordInputRef,
    getLoginButton,
    getCreateAccountButton,
    submitHandler,
  };
};
