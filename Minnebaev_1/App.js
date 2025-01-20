import React from 'react';
import { Text, View } from 'react-native';

const MyHelloWorld = () => {
  return (
    <View style = {{ flex: 1, justifyContent: "center", allignItems: "center" }}>
      <Text>
        Hello World
      </Text>
    </View>
  )
}

export default MyHelloWorld;