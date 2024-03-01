import { useContext } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import Drawer from "../Drawer/Drawer";
import RegisterOrLogin from "../RegisterOrLogin/RegisterOrLogin";

function Routes() {
  const { username } = useContext(UserContext);
  if (username) {
    console.log(username);
    return <Drawer />;
  } else {
    return <RegisterOrLogin />;
  }
}

export default Routes;
