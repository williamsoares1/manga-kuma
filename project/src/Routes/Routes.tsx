import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRoutes } from "./BottomTabRoutes/TabRoutes";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import { Capitulo } from "../pages/capitulo/Capitulo";
import { Manga } from "../pages/manga/Manga";
import Inicio from "../pages/inicio/Inicio";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Routes() {
  const { userData } = useContext(AuthContext);
  const logado = Object.keys(userData).length !== 0;

  useEffect(() => {}, [userData]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {!logado ? (
          <>
            <Stack.Screen name="tabs" component={TabRoutes} />
            <Stack.Screen name="Manga" component={Manga} />
            <Stack.Screen name="Capitulo" component={Capitulo} />
          </>
        ) : (
          <>
           <Stack.Screen name="Inicio" component={Inicio} /> 
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="cadastro" component={Cadastro} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;