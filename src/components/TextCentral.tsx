import React from 'react';
import {View, Text} from 'react-native';

const TextCentral = props => {
  return (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.CorFundo || '#000'
    }}>
    <Text
      style={{
        fontSize: 50,
      }}>
      {props.children}
    </Text>
  </View>
  )
};
export default TextCentral;