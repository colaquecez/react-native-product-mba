import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Detail } from 'src/screens';

import HomeStack from './Home.route';
import useAppSelector from 'src/hooks/useSelector';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Detail: { idProduct: string | number };
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthStackRoute = () => {
  const { validated } = useAppSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {validated ? (
          <AuthStack.Group>
            <AuthStack.Screen name="Home" component={HomeStack} />
            <AuthStack.Screen
              options={{
                presentation: 'modal'
              }}
              name="Detail"
              component={Detail}
            />
          </AuthStack.Group>
        ) : (
          <AuthStack.Group>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
          </AuthStack.Group>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackRoute;
