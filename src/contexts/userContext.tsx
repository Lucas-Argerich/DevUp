import {
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

type UserStates = undefined | null | User;

type UserContextType = {
  user: UserStates;
  setUser: (value: UserStates) => void;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserStates>(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      getRedirectResult(auth)
        .then((result) => {
          if (result) {
            setUser(result.user);
          } else {
            setUser(null);
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
