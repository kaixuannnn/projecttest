import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef} from 'react';
import {LIGHT_GREY} from '../config/colors';

const AppTextInput = forwardRef((props, ref) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <TextInput
        ref={ref}
        style={styles.inputContainer}
        returnKeyType="next"
        {...props}
      />
    </View>
  );
});

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    flex: 1,
  },
  inputContainer: {
    borderColor: LIGHT_GREY,
    borderWidth: 0.8,
    borderRadius: 8,
    padding: 5,
    width: '100%',
    flex: 3,
  },
});
