import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactsList from '../components/ContactsList';

import persons from '../config/data.json';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <ContactsList data={persons} />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
