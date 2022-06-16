import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PersonProvider} from './app/contexts/PersonContext';
import StackNavigator from './app/navigation/StackNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <PersonProvider>
        <StackNavigator />
      </PersonProvider>
    </NavigationContainer>
  );
};

export default App;
