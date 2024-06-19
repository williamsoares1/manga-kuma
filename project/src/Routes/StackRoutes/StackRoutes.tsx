import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../pages/home/home';
import { MangaEsp } from '../../pages/mangaEsp/mangaEsp';

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MangaList">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes da obra" component={MangaEsp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;