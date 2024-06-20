import { ReactNode, createContext, useState } from 'react';

const AuthContext = createContext({});

interface ContextProps{
  children: ReactNode
}

const AuthProvider = ({ children }: ContextProps) => {
  const [ usuarioLogado, setUsuarioLogado ] = useState<boolean>(false); // Inicialmente, nenhum usuário está logado

  return (
    <AuthContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }