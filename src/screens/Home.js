import React from 'react';
import {View, StyleSheet, Text, Button, Pressable} from 'react-native';

const Home = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          padding: 20,
        }}>
        <Text style={styles.font}>Welcome to Real Time Translating.</Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 24,
            color: '#000',
            textAlign: 'justify',
          }}>
          You can scan sentences or words with the camera and translate them
          instantly.
        </Text>
      </View>
      <View
        style={{
          height: 120,
          justifyContent: 'space-between',
        }}>
        <Pressable
          style={{
            backgroundColor: '#293462',
            color: '#fff',
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderWidth: 2,
            borderColor: '#000',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Bold',
              color: '#fff',
            }}>
            English to Turkish
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#EB1D36',
            color: '#000',
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderWidth: 2,
            borderColor: '#000',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Bold',
              color: '#000',
            }}>
            Türkçeden İngilizceye
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
