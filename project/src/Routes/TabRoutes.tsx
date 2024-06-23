import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../pages/home/home";
import Favoritos from "../pages/favoritos/Favoritos";
import Usuario from "../pages/usuario/Usuario";
import { Fontisto } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Principal: undefined;
  Usuario: undefined;
  Salvos: undefined;
};

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          elevation: 0,
          position: "absolute",
          opacity: 0.85,
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Salvos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={Usuario}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
