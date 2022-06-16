import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {useContext} from 'react';
import AppTextInput from '../components/AppTextInput';
import {LIGHT_GREY} from '../config/colors';
import {Formik} from 'formik';
import PersonContext from '../contexts/PersonContext';

const Header = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

const ContactDetailsScreen = ({route}) => {
  const person = route?.params?.person;
  const {addPerson} = useContext(PersonContext);
  return (
    <View>
      <Text>{person.firstName}</Text>
      <Formik
        initialValues={{...person}}
        onSubmit={values => addPerson(values)}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <Header title="Main Information" />
            <AppTextInput
              title="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
            />
            <AppTextInput
              title="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            />
            <Header title="Sub Information" />
            <AppTextInput
              title="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              title="Phone"
              value={values.phone}
              onChangeText={handleChange('phone')}
            />
            <TouchableHighlight onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: LIGHT_GREY,
    paddingVertical: 2,
    marginVertical: 5,
  },
});
