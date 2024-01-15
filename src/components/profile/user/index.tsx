import ProfileForm from "../form";
import { ProfileType } from "../form/types";
import classes from "./styles.module.css";

export const UserProfile = () => {
  async function changePasswordHandler(passwordData: ProfileType) {
    console.log(passwordData);
    // const response = await fetch('/api/user/change-password', {
    //   method: 'PATCH',
    //   body: JSON.stringify(passwordData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // const data = await response.json();

    // console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
};
