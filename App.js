import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
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
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
