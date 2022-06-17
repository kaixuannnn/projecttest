import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import AppTextInput from '../components/AppTextInput';
import {LIGHT_GREY, PRIMARY_COLOR} from '../config/colors';
import {Formik} from 'formik';
import PersonContext from '../contexts/PersonContext';
import {useRef} from 'react';

const Header = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

const ContactDetailsScreen = ({navigation, route}) => {
  const person = route?.params?.person;
  const {addPerson} = useContext(PersonContext);
  const ref = useRef();
  console.log(ref);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            ref?.current?.handleSubmit();
            navigation.goBack();
          }}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>{person.firstName}</Text>
      <Formik
        initialValues={{...person}}
        onSubmit={values => addPerson(values)}
        innerRef={ref}>
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
  save: {
    color: PRIMARY_COLOR,
    fontSize: 18,
  },
});
