import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Театр, который нельзя увидеть: 7 аудиоспектаклей о Москве</Text>
      </View>

      <View style={{ flex: 2, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>
          Спектакли в наушниках — редкий и особый жанр. Собрали аудиоспектакли о Москве, большинство из которых можно прослушать бесплатно на улицах города, в его знаковых исторических местах, слушать в театре — и о театре.
        </Text>
      </View>

      <View style={{ flex: 3, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>
          Аудиоспектакль московского еврейского театра «Шалом» — это увлекательное путешествие, в котором артисты совершают прыжок во времени и пространстве на 50, а то и на 100 лет назад. Маневрируя между главными потрясениями XX века, слушатели познакомятся с головокружительной и трагичной историей национальных театров Москвы: ГОСЕТа, латышского театра «Скатуве», цыганского театра «Ромэн».
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Читать далее"
          onPress={() => Linking.openURL('https://brightmagazine.ru/7-audio-performances/')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    padding: 15,
    marginTop: 50
  },
  buttonContainer: {
    marginTop: 10,
    padding: 20, // Отступы для контейнера кнопки
  },
});

export default FlexDimensionsBasics;