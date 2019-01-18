import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import SearchInput from '../../components/SearchInput/SearchInput';
import Icon from '../../components/Icon/Icon';
import ProductItem from '../../components/ProductItem/ProductItemView';

import s from './styles';
import { data } from '../../mocks/Browse';

const BrowseScreenView = () => (
  <View style={s.container}>
    <StatusBar barStyle="dark-content" />
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      numColumns={2}
      // columnWrapperStyle={s.columStyle}
      contentContainerStyle={s.contentContainer}
      renderItem={({ item }) => (
        <View
          // style={[
          //   index % 2 == 0
          //     ? { marginRight: 5 }
          //     : { marginLeft: 5, marginRght: 0 },
          // ]}
          style={s.flatList}
        >
          <ProductItem
            image={item.image}
            title={item.title}
            price={item.price}
          />
        </View>
      )}
    />
  </View>
);
BrowseScreenView.navigationOptions = {
  title: 'Browse',
  headerTitle: () => (
    <View style={s.header}>
      <SearchInput style={s.headerSearch} />
    </View>
  ),
  headerRight: (
    <View style={s.rightIcon}>
      <Icon iconName="inbox" />
    </View>
  ),
};

export default BrowseScreenView;
