import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenSplash from '../../screen/ScreenSplash';
import ScreenOnboard from '../../screen/ScreenOnboard';
import ScreenLogin from '../../screen/ScreenLogin';
import Main from '../../../Main';
import { RootStackParamList } from '../navigation/types';

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenSplash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenSplash" component={ScreenSplash} />
        <Stack.Screen name="ScreenOnboard" component={ScreenOnboard} />
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;