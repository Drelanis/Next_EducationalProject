import { FormEvent, useRef } from "react";
import { ProfileFormProps } from "./types";

export const useLogic = (params: ProfileFormProps) => {
  const { onChangePassword } = params;

  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef?.current?.value;
    const enteredNewPassword = newPasswordRef?.current?.value;

    onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  };

  return {
    oldPasswordRef,
    newPasswordRef,
    submitHandler,
  };
};
