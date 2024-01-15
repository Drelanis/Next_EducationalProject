import { PropsWithChildren } from "react";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};
