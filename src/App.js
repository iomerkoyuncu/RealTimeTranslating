import React, {useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {TranslatorProvider, useTranslator} from 'react-native-translator';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons';

import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  Pressable,
} from 'react-native';

const Hook = () => {
  const {translate} = useTranslator();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const cameraRef = useRef(null);
  let guesses = [];

  function mostFrequent(arr, n) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }

      if (count > maxcount) {
        maxcount = count;
        element_having_max_freq = arr[i];
      }
    }

    return element_having_max_freq;
  }

  const onTranslate = async () => {
    try {
      setLoading(true);
      const _result = await translate('en', 'tr', value, {
        type: 'kakao',
        timeout: 10000,
      });
      setResult(_result);
    } catch (error) {
      Alert.alert('Translate error!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.camera}
        captureAudio={false}
        onTextRecognized={({textBlocks}) => {
          guesses.push(textBlocks.map(block => block.value).join(''));
          if (guesses.length === 5) {
            setValue(mostFrequent(guesses, 5));
            guesses = [];
          }
        }}
      />
      <View
        style={{
          marginTop: 10,
          flex: 2,
          justifyContent: 'space-between',
          backgroundColor: 'white',
          color: 'black',
        }}>
        <View
          style={{
            padding: 10,
            flex: 1,
            height: '100%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>DETECTED</Text>
            <Text style={{fontFamily: 'Poppins-Regular'}}>English</Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 5,
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>{value}</Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            flex: 1,
            height: '100%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>TRANSLATED</Text>
            <Text style={{fontFamily: 'Poppins-Regular'}}>Türkçe</Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 5,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Button title="CLEAR"></Button>
            </View>
            <View
              style={{
                flex: 4,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Regular'}}>{result}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}>
                Login with Facebook
              </Icon.Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const App = () => {
  return (
    <TranslatorProvider>
      <Hook />
    </TranslatorProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent',
    fontFamily: 'Poppins-Regular',
  },
  content: {
    flex: 2,
    justifyContent: 'space-between',
  },
  camera: {
    flex: 3,
    height: '100%',
  },
  box: {
    flex: 1,
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderWidth: 5,
    borderRadius: 20,
  },
  heading: {
    fontSize: 18,

    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    width: '100%',
    backgroundColor: '#181D31',
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
});
