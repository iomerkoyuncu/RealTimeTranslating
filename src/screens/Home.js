import React from 'react';
import { View, StyleSheet, Text, Linking, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          padding: 20,
          flex: 5,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.font}>Welcome to Real Time Translating.</Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 24,
            color: '#000',
            textAlign: 'justify',
            padding: 10,
            marginTop: 10,
          }}>
          You can scan sentences or words with the camera and translate them
          instantly.
        </Text>
        <Text style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 24,
          color: '#000',
          textAlign: 'justify',
          padding: 10,
          marginTop: 10,
        }}>
          Scan the word or sentence you want to translate and press the button.
        </Text>
      </View>
      <View
        style={{
          height: 120,
          flex: 3,
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => navigation.navigate('Translate')}
          style={{
            backgroundColor: '#07031A',
            width: 350,
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
            Get Started
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-end',
        }}
      >
        <View style={
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: 350,
            padding: 10,
          }
        }>
          <Text style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: '#000',
            padding: 10,
          }}>ismetkync 2022</Text>
          <Pressable
            style={styles.pressable}
            onPress={() => { Linking.openURL('https://github.com/ismetkync/RealTimeTranslating') }}
          >
            <AntDesign name="github" size={30} style={{ color: 'black' }} />
          </Pressable>
        </View>
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
    alignItems: 'center',
  },
  pressable: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
