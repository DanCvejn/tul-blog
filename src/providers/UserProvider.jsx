import { createContext, useEffect, useState } from 'react';
import { getUser } from '../helpers/apiFetch';
import FullPageLoader from '../components/loaders/FullPageLoader';

export const UserContext = createContext(null);

const getUserFromAPI = async (setUser) => {
  const res = await getUser();
  return setUser(res);
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const setUserData = (user) => {
    setLoading(false);
    setUser(user);
  }

  useEffect(() => {
    getUserFromAPI(setUserData);
  }, [])

  useEffect(() => {
    if (user && (window.location.pathname === "/login" || window.location.pathname === "/register")) {
      window.location.pathname = "/";
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user }}>
      {!loading ?
        children:
        <FullPageLoader />
      }
    </UserContext.Provider>
  )
}

export default UserProvider