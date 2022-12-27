import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TranslatorProvider } from 'react-native-translator';
import Home from './screens/Home';
import Translate from './screens/Translate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TranslatorProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }} />
          <Stack.Screen name="Translate" component={Translate} />
        </Stack.Navigator>
      </TranslatorProvider>
    </NavigationContainer>
  );
};

export default App;
