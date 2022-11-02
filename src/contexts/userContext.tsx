import { createContext, useState } from "react";

type UserStates = undefined | null | User;

type UserContextType = {
  user: UserStates;
  setUser: (value: User) => void;
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserStates>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
