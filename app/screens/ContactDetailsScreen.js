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
  const formikRef = useRef();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            formikRef?.current?.handleSubmit();
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
        innerRef={formikRef}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <Header title="Main Information" />
            <AppTextInput
              title="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              ref={firstNameRef}
              onSubmitEditing={() => lastNameRef.current.focus()}
            />
            <AppTextInput
              title="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              ref={lastNameRef}
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <Header title="Sub Information" />
            <AppTextInput
              title="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              ref={emailRef}
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <AppTextInput
              title="Phone"
              value={values.phone}
              onChangeText={handleChange('phone')}
              ref={phoneRef}
            />
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
