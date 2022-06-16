import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ContactsList from '../components/ContactsList';
import PersonContext from '../contexts/PersonContext';

const ContactsScreen = () => {
  const {persons} = useContext(PersonContext);

  return (
    <View style={styles.container}>
      <ContactsList data={persons} />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
