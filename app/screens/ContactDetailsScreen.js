import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import * as Yup from 'yup';
import AppTextInput from '../components/AppTextInput';
import {LIGHT_GREY, PRIMARY_COLOR} from '../config/colors';
import {Formik} from 'formik';
import PersonContext from '../contexts/PersonContext';
import {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Header = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
});

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
          }}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.iconPlaceholder} />
      <Formik
        initialValues={{...person}}
        onSubmit={values => {
          addPerson(values);
          navigation.goBack();
        }}
        innerRef={formikRef}
        validationSchema={validationSchema}>
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
    </KeyboardAwareScrollView>
  );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  iconPlaceholder: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 10,
    alignSelf: 'center',
    marginVertical: 15,
  },
  header: {
    backgroundColor: LIGHT_GREY,
    paddingVertical: 2,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  save: {
    color: PRIMARY_COLOR,
    fontSize: 18,
  },
});
