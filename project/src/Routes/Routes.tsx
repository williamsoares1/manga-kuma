import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRoutes } from "./TabRoutes";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import { Capitulo } from "../pages/capitulo/Capitulo";
import { MangaEsp } from "../pages/mangaEsp/mangaEsp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Routes() {
  const { userData } = useContext(AuthContext);
  const logado = Object.keys(userData).length !== 0;
  // const logado = true; // editar sem ter que ficar logando

  useEffect(() => { }, [userData]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {logado ? (
          <>
            <Tab.Screen name="tabs" component={TabRoutes} />
            <Stack.Screen name="Detalhes da obra" component={MangaEsp} />
            <Stack.Screen name="Capitulo" component={Capitulo} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="cadastro" component={Cadastro} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
