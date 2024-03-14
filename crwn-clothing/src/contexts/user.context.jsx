import { createContext, useState, useMemo } from 'react';

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
