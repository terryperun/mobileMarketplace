import React from 'react';
import { View, Text, Image } from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';

import s from './styles';

const BrowseScreenView = () => (
  <View>
    <Text>Browse</Text>
  </View>
);

BrowseScreenView.navigationOptions = {
  title: 'Browse',
  // header: () => ( //try add image in header
  //   <Image
  //     style={s.headerImage}
  //     source={{
  //       uri:
  //         'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
  //     }}
  //   />
  // ),
  headerTitle: () => (
    <View style={s.header}>
      <SearchInput style={s.headerSearch} />
    </View>
  ),
  // headerStyle: { height: 80 },
};

export default BrowseScreenView;
