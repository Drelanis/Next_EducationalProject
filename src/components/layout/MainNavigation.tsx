import Link from "next/link";
import classes from "./styles.module.css";

import { signOut, useSession } from "next-auth/react";

export const MainNavigation = () => {
  // const { data: session, status } = useSession();

  // const loading = status === "loading";

  // const logoutHandler = () => signOut();

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {/* {!session && !loading && ( */}
          <li>
            <Link href="/auth">Login</Link>
          </li>
          {/* )} */}
          {/* {session && ( */}
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {/* )} */}
          {/* {session && ( */}
          <li>
            <button>Logout</button>
          </li>
          {/* )} */}
        </ul>
      </nav>
    </header>
  );
};
