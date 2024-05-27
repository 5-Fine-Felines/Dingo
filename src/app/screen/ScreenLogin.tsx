import React from 'react'
import { View, Text , Button} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/navigation/types';

type ScreenLoginNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenLogin'>;

type Props = {
  navigation: ScreenLoginNavigationProp;
};

const ScreenLogin: React.FC<Props>  = ({navigation}) => {
  return (
    <View>
      <Text>Screen Login</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

export default ScreenLogin