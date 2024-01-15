import classes from "./styles.module.css";
import { useLogic } from "./useLogic";

export const AuthForm = () => {
  const {
    isLogin,
    emailInputRef,
    passwordInputRef,
    getCreateAccountButton,
    getLoginButton,
    submitHandler,
  } = useLogic();

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={isLogin ? getCreateAccountButton : getLoginButton}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
