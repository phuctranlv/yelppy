import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
      >
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;