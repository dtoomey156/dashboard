import { createContext, useState, useEffect, Children } from "react";
// import axios from "axios";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
