import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.journal}>Журнал Bright</Text>

      <Text style={styles.link} onPress={() => Linking.openURL('http://brightmagazine.ru/')}>
        Новости
      </Text>
      <Image
        source={{ uri: 'https://brightmagazine.ru/wp-content/uploads/2025/02/febiyan-hwDGRQzAeM-unsplash-768x512.jpg' }}
        style={styles.image}
      />

      {/* Жирный заголовок по центру */}
      <Text style={styles.title}>
        Hygge work или почему датчане любят свою работу
      </Text>

      {/* Основной текст */}
      <Text style={styles.content}>
        На работе мы чаще всего проводим больше времени, чем с друзьями и близкими. Согласно исследованию UKG Workforce, наши начальники оказывают такое же влияние на наше психическое здоровье, как и наши друзья. Эти два обстоятельства делают очевидным то, почему так важно чувствовать себя хорошо на работе.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Читать далее"
          onPress={() => Linking.openURL('https://brightmagazine.ru/hygge-work/')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
    borderColor: '#e6e6fa',
    borderWidth: 10,
    borderTopWidth: 160, // Большая верхняя граница
    borderRadius: 45,
  },
  journal: {
    top: -100, // Отступ сверху (регулируйте это значение, чтобы текст был внутри границы)
    textAlign: 'center', // Центрирование текста
    fontSize: 35, // Размер текста
    fontWeight: 'bold', // Жирный шрифт
    color: '#333', // Цвет текста
  },
  link: {
    color: 'blue',
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginBottom: 10,
    top: -40,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    top: -15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#666',
    marginBottom: 20, // Отступ для кнопки
  },
  buttonContainer: {
    marginTop: 10, // Отступ сверху для кнопки
  },
});

export default App;