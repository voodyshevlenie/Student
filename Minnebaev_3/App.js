import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Linking } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Компонент Text */}
      <Text style={styles.title}>Добро пожаловать в React Native!</Text>

      {/* Компонент Image */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      {/* Компонент Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Перейти на сайт React Native"
          onPress={() => Linking.openURL('https://reactnative.dev')}
          color="#6200ee"
        />
      </View>

      {/* Дополнительный текст */}
      <Text style={styles.description}>
        React Native — это фреймворк для создания нативных приложений с использованием React.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default App;