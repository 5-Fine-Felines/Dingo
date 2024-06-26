import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenSplash from './src/app/screen/ScreenSplash';
import ScreenOnboard from './src/app/screen/ScreenOnboard';
import ScreenLogin from './src/app/screen/ScreenLogin';
import Main from './src/Main';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
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

export default App;
