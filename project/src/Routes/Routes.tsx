import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRoutes } from "./TabRoutes";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import { Capitulo } from "../pages/capitulo/Capitulo";
import { Manga } from "../pages/manga/Manga";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Routes() {
  const { userData } = useContext(AuthContext);
  const logado = Object.keys(userData).length !== 0;

  useEffect(() => {}, [userData]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerTitle: '', headerStatusBarHeight:20 }}
      >
        {!logado ? (
          <>
            <Stack.Screen name="tabs" component={TabRoutes} />
            <Stack.Screen name="Manga" component={Manga} />
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