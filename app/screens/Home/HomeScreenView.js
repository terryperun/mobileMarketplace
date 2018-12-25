import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SearchInput from '../../components/SearchInput/SearchInput';
import s from './styles';

const HomeScreenView = () => (
  <View>
    <Text>Home</Text>
  </View>
);

HomeScreenView.navigationOptions = ({ navigation }) => ({
  // headerleft: 'Home',
  headerRight: (
    <Ionicons
      style={s.containerCartBtn}
      name="ios-cart"
      size={32}
      color="black"
      onPress={() => navigation.navigate('Cart')}
    />
  ),
  headerTitle: () => (
    <View style={s.header}>
      <SearchInput style={s.headerSearch} />
    </View>
  ),
  headerLeft: null,
});

export default HomeScreenView;
