import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Test from '~/screens/Test';

const Stack = createNativeStackNavigator();

export const RouterContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen key="Test" name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
