import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import s from './styles';

const SearchInput = () => (
  <View style={s.searchContainer}>
    <FontAwesome name="search" style={s.searchIcon} size={28} />
    <TextInput placeholder="type smth..." style={s.textInput} />
  </View>
);

export default SearchInput;
