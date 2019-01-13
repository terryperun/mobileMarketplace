import React from 'react';
import { View, Text } from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';
import Icon from '../../components/Icon/Icon';

import s from './styles';

const BrowseScreenView = () => (
  <View>
    <Text>search</Text>
    <Icon iconName="search" />
    <Text>search-outline</Text>
    <Icon iconName="search-outline" />

    <Text>saved</Text>
    <Icon iconName="saved" />
    <Text>saved-outline</Text>

    <Text>Camera</Text>
    <Icon iconName="Camera" />

    <Text>inbox</Text>
    <Icon iconName="inbox" />
    <Text>inbox-outline</Text>
    <Icon iconName="inbox-outline" />

    <Text>profile</Text>
    <Icon iconName="profile" />
    <Text>profile-outline</Text>
    <Icon iconName="profile-outline" />
  </View>
);

BrowseScreenView.navigationOptions = {
  title: 'Browse',
  headerTitle: () => (
    <View style={s.header}>
      <SearchInput style={s.headerSearch} />
    </View>
  ),
  // headerStyle: { height: 80 },
};

export default BrowseScreenView;
