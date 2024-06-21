import { ReactNode, createContext, useState } from 'react';

interface AuthType {
  user: boolean;
  handleLoginSuccess: () => void;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthType>({
  user: false,
  handleLoginSuccess: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(false);

  const handleLoginSuccess = () => {
    setUser(true);
  };

  const handleLogout = async () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, handleLoginSuccess, handleLogout }}>
      { children }
    </AuthContext.Provider>
  );
};
