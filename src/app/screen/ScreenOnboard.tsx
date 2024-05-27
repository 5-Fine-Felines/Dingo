import React from 'react';
import { View, Text} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/navigation/types';
import Button from './components/Button';

type ScreenOnboardNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenOnboard'>;

type Props = {
  navigation: ScreenOnboardNavigationProp;
};

const ScreenOnboard: React.FC<Props> =({navigation}) =>{
  return(
    <View>
      <Text>
        Onboarding Screen
      </Text>
      <Button 
        title= "Get Started"
        onPress={()=> navigation.navigate('ScreenLogin')}
      />

    </View>
  )
}

  

export default ScreenOnboard;
