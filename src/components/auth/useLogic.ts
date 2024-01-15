import { FormEvent, useRef, useState } from "react";

export const useLogic = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const [isLogin, setIsLogin] = useState(true);

  const getLoginButton = () => setIsLogin(true);

  const getCreateAccountButton = () => setIsLogin(false);

  const submitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;
    const enteredPassword = passwordInputRef?.current?.value;
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
