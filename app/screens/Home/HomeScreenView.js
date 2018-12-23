import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import IconOnPress from '../../components/IconOnPress/IconOnPress';
import s from './styles';

const HomeScreenView = () => (
  <View>
    <Text>Home</Text>
  </View>
);

HomeScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerRight: (
    <Ionicons
      style={s.containerCartBtn}
      name="ios-cart"
      size={32}
      color="black"
      onPress={() => navigation.navigate('Cart')}
    />
  ),
  // headerRight: (
  //   <IconOnPress
  //     style={s.containerCartBtn}
  //     onPress={goToCart}
  //     iconName="ios-cart"
  //   />
  // ),
});

export default HomeScreenView;
