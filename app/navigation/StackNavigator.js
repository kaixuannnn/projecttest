import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactDetailsScreen from '../screens/ContactDetailsScreen';
import ContactsScreen from '../screens/ContactsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Contacts" component={ContactsScreen} />
    <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
