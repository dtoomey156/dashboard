import { useContext, useState } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import Logo from "../Logo/Logo";
import Drawer from "../Drawer/Drawer";
import Main from "../Main/Main";
import RegisterOrLogin from "../RegisterOrLogin/RegisterOrLogin";

function Routes() {
  const { username } = useContext(UserContext);
  // console.log(appArray, "this is within Routes");
  if (username) {
    return (
      <>
        <Logo />
        <Drawer />
        <Main />
      </>
    );
  } else {
    return <RegisterOrLogin />;
  }
}

export default Routes;
