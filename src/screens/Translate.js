import React, { useRef, useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { useTranslator } from 'react-native-translator';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  Pressable,
} from 'react-native';

const Translate = () => {
  const { translate } = useTranslator();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [entoTr, setEntoTr] = useState(true);

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
    if (value === '') {
      Alert.alert('Please scan text to translate!');
      return;
    }
    try {
      setLoading(true);
      if (result) {
        clearState();
      }
      if (entoTr) {
        const _result = await translate('en', 'tr', value, {
          type: 'kakao',
          timeout: 10000,
        });
        setResult(_result);
      }
      else {
        const _result = await translate('tr', 'en', value, {
          type: 'kakao',
          timeout: 10000,
        });
        setResult(_result);
      }

    } catch (error) {
      Alert.alert('Translate error!');
    } finally {
      setLoading(false);
    }
  };

  const clearState = () => {
    setValue('');
    setResult('');
  };

  return (
    <>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.camera}
        captureAudio={false}
        onTextRecognized={({ textBlocks }) => {
          setValue(textBlocks.map(block => block.value).join(''))

        }}
      />
      <View
        style={styles.main}>
        <View>
          <Button
            title="Switch Language"
            color={"#000"}
            onPress={() => setEntoTr(!entoTr)}
          />
        </View>
        <View
          style={styles.detected}>
          <View
            style={styles.heading}>
            <Text style={styles.font}>
              DETECTED
            </Text>
            <Text style={styles.font}>
              {entoTr ? 'English' : 'Türkçe'}
            </Text>
          </View>
          <View
            style={styles.outputContainer}>
            <Text
              style={styles.fontLg}>
              {value}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            flex: 1,
            height: '100%',
          }}>
          <View
            style={styles.heading}>
            <Text style={styles.font}>
              TRANSLATED
            </Text>
            <Text style={styles.font}>
              {entoTr ? 'Türkçe' : 'English'}
            </Text>
          </View>
          <View
            style={styles.outputContainer}>
            <View
              style={styles.buttonContainer}>
              <Pressable
                style={styles.pressable}
                onPress={clearState}>
                <AntDesign name="reload1" size={20} style={{ color: 'black' }} />
              </Pressable>
            </View>
            <View
              style={{
                flex: 4,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.fontLg}>
                {result}
              </Text>
            </View>
            <View
              style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator color="black" />
              ) : (
                <Pressable
                  style={styles.pressable}
                  onPress={onTranslate}>
                  <AntDesign name="check" size={20} style={{ color: 'black' }} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Translate;

const styles = StyleSheet.create({
  camera: {
    flex: 3,
    height: '100%',
  },
  main: {
    marginTop: 10,
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
  },
  detected: {
    padding: 10,
    flex: 1,
    height: '100%',
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font: {
    fontFamily: 'Poppins-Bold',
    color: 'black'

  },
  pressable: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  outputContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  fontLg: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
  },
});
