import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LIGHT_GREY, PRIMARY_COLOR} from '../config/colors';

import initialData from '../config/data.json';
import PersonContext from '../contexts/PersonContext';

const Separator = () => <View style={styles.separator} />;

const ContactsList = ({data}) => {
  const navigation = useNavigation();
  const {setBackToInitial} = useContext(PersonContext);
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('ContactDetails', {person: item})}>
        <View style={styles.listItem}>
          <View style={styles.iconPlaceholder} />
          <Text>
            {item.firstName} {item.lastName}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
      ItemSeparatorComponent={Separator}
      onRefresh={() => {
        setLoading(true);
        setBackToInitial();
        setLoading(false);
      }}
      refreshing={loading}
    />
  );
};

export default ContactsList;

const styles = StyleSheet.create({
  iconPlaceholder: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR,
    marginRight: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: LIGHT_GREY,
    width: '100%',
    height: 1,
    marginVertical: 10,
  },
});
