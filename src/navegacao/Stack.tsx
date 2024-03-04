import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default  props => (
  <Stack.Navigator initialRouteName='TelaA'>
    <Stack.Screen name='TelaA' >
      {props => (
      <PassoStack {...props} avancar="TelaB">
        <TelaA/>
      </PassoStack>

      )}

    </Stack.Screen>
    <Stack.Screen name='TelaB' >
    {props => (
      <PassoStack {...props} avancar="TelaC" voltar>
        <TelaB/>
      </PassoStack>

      )}
    </Stack.Screen>
    <Stack.Screen name='TelaC' component={TelaC}></Stack.Screen>
  </Stack.Navigator>
)

