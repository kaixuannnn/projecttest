import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PRIMARY_COLOR} from './app/config/colors';
import {PersonProvider} from './app/contexts/PersonContext';
import StackNavigator from './app/navigation/StackNavigator';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
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
