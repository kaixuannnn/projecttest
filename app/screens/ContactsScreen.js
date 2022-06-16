import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactsList from '../components/ContactsList';
import PersonContext from '../contexts/PersonContext';
import {PRIMARY_COLOR} from '../config/colors';

const ContactsScreen = ({navigation}) => {
  const {persons} = useContext(PersonContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon name="add" size={20} color={PRIMARY_COLOR} />,
      headerLeft: () => <Icon name="search" size={20} color={PRIMARY_COLOR} />,
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
