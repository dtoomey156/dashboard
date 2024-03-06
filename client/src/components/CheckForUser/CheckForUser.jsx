import { createContext, useState } from "react";

export const UserContext = createContext({});

function CheckForUser({ children }) {
  const [username, setUsername] = useState("");
  // useEffect(() => {
  //   axios.get("/profile").then((response) => {
  //     setUsername(response.data.username);
  //   });
  // }, []);
  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  );
}

export default CheckForUser;
