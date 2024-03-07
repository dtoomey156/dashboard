import { useContext } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import Logo from "../Logo/Logo";
import Drawer from "../Drawer/Drawer";
import RegisterOrLogin from "../RegisterOrLogin/RegisterOrLogin";

function Routes() {
  const { username } = useContext(UserContext);
  if (username) {
    return (
      <>
        <Logo />;
        <Drawer />;
      </>
    );
  } else {
    return <RegisterOrLogin />;
  }
}

export default Routes;
