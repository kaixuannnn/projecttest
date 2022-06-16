import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactsList from '../components/ContactsList';
import PersonContext from '../contexts/PersonContext';

const ContactsScreen = ({navigation}) => {
  const {persons} = useContext(PersonContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon name="add" />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ContactsList data={persons} />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
