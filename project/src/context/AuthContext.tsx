import { ReactNode, createContext, useState } from "react";
import { apiClientes } from "../services/api-clientes/api";

interface AuthType {
  userData: {};
  handleLogin: (id: string, nome: string, email: string) => void;
  handleLogout: () => void;
  excluirUsuario: (userId: string) => void;
}

export const AuthContext = createContext<AuthType>({
  userData: {},
  handleLogin: () => { },
  handleLogout: () => { },
  excluirUsuario: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState({});

  const handleLogin = (id: string, nome: string, email: string) => {
    setUserData({ id, nome, email });
  };

  const handleLogout = async () => {
    setUserData({});
  };

  const excluirUsuario = async (userId: string) => {
    try {
      await apiClientes.delete(`/users/${userId}`);
      alert('Conta excluida')
    } catch (error) {
      console.error(error);
      alert(`Erro ao excluir usuário: ${error}`);
    }
    setUserData({})
  }


  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout,
        excluirUsuario
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
