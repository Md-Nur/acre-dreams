import { createContext, useState, useContext } from "react";

const userAuth = createContext(null);

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <userAuth.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </userAuth.Provider>
  );
};

export default UserAuthProvider;

export const useUserAuth = () => {
  return useContext(userAuth);
};
