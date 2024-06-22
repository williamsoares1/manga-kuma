import { ReactNode, createContext, useState } from "react";

interface AuthType {
  userData: {};
  handleLogin: (nome: string, email: string) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthType>({
  userData: {},
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState({});

  const handleLogin = (nome: string, email: string) => {
    setUserData({ nome, email });
  };

  const handleLogout = async () => {
    setUserData({});
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
