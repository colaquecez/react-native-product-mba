import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'src/screens';

export type AuthStackParams = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackRoute = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackRoute;
