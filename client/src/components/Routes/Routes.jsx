import { useContext } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import Drawer from "../Drawer/Drawer";

function Routes() {
  const { username } = useContext(UserContext);
  if (username) {
    console.log(username);
    return <Drawer />;
  }
}

export default Routes;
