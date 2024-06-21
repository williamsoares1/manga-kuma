import { ReactNode, createContext, useState } from "react";

interface AuthType {
  user: boolean;
  userData: {};
  handleLoginSuccess: () => void;
  handleLogout: () => void;
  handleUserData: (nome: string, email: string) => void;
}

export const AuthContext = createContext<AuthType>({
  user: false,
  userData: {},
  handleLoginSuccess: () => {},
  handleLogout: () => {},
  handleUserData: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLoginSuccess = () => {
    setUser(true);
  };

  const handleLogout = async () => {
    setUser(false);
  };

  const handleUserData = (nome: string, email: string) => {
    setUserData({ nome, email });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        handleLoginSuccess,
        handleLogout,
        handleUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
