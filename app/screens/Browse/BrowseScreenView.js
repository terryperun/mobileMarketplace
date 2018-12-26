import React from 'react';
import { View, Text } from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';

import s from './styles';

const BrowseScreenView = () => (
  <View>
    <Text>Browse</Text>
  </View>
);

BrowseScreenView.navigationOptions = {
  title: 'Browse',
  headerTitle: () => (
    <View style={s.header}>
      <SearchInput style={s.headerSearch} />
    </View>
  ),
  headerStyle: { height: 80 },
};

export default BrowseScreenView;
