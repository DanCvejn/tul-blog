import { createContext, useEffect, useState } from 'react';
import { getUser } from '../helpers/apiFetch';

export const UserContext = createContext(null);

const getUserFromAPI = async (setUser) => {
  const res = await getUser();
  return setUser(res);
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserFromAPI(setUser);
  }, [])

  useEffect(() => {
    if (user && (window.location.pathname === "/login" || window.location.pathname === "/register")) {
      window.location.pathname = "/";
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider