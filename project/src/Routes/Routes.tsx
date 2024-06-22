import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRoutes } from "./TabRoutes";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import { MangaEsp } from "../pages/mangaEsp/mangaEsp";
import { Capitulo } from "../pages/capitulo/Capitulo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Routes() {
  const { user } = useContext(AuthContext);
  const [estaLogado, setEstaLogado] = useState(user);

  useEffect(() => {
    setEstaLogado(user);
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        {!estaLogado ? (
          <>
            <Tab.Screen name="tabs" component={TabRoutes} />
          </>
          
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="cadastro" component={Cadastro} />
          </>
        )}
        <Stack.Screen name="Detalhes da obra" component={MangaEsp} />
        <Stack.Screen name="Capitulo" component={Capitulo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
