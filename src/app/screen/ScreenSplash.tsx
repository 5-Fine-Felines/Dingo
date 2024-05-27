import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/navigation/types';


type ScreenSplashNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenSplash'>;


type Props = {
  navigation: ScreenSplashNavigationProp;
};

const ScreenSplash: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ScreenOnboard');
    }, 3000); 
  }, [navigation]);

  return (
    <View >
      <Text>Welcome to the App</Text>
    </View>
  );
};


export default ScreenSplash
