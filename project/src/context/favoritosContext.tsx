import { ReactNode, createContext, useState } from 'react';

interface FavoritosContext {
    updateFavoritos: string;
    setUpdateFavoritos: (update: string) => void;
}

const FavoritosContext = createContext<FavoritosContext>({
    updateFavoritos: '',
    setUpdateFavoritos: () => { },
});

const FavoritosProvider = ({ children }: { children: ReactNode }) => {
    const [updateFavoritos, setUpdateFavoritos] = useState('');

    return (
        <FavoritosContext.Provider value={{ updateFavoritos, setUpdateFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    );
};

export { FavoritosProvider, FavoritosContext };