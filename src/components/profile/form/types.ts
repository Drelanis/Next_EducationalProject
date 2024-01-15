export type ProfileType = {
  oldPassword: string | undefined;
  newPassword: string | undefined;
};

export type ProfileFormProps = {
  onChangePassword: (params: ProfileType) => Promise<void>;
};
