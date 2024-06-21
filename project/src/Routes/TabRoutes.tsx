import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../pages/home/home";
import Favoritos from "../pages/favoritos/Favoritos";
import Usuario from "../pages/usuario/Usuario";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Principal: undefined;
  Usuario: undefined;
  Favoritos: undefined;
};

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000"},
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
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
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
