import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

function CheckForUser({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get("/profile").then((response) => {
      setUsername(response.data.username);
    });
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}

export default CheckForUser;
