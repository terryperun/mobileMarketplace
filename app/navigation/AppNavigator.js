import React from 'react';
import {
  createBottomTabNavigator,
  navigation,
} from 'react-navigation';
import { View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import screens from './screens';
// import HomeNavigator from './HomeNavigator';
// import DashboardNavigator from './DashboardNavigator';
import ProfileNavigator from './ProfileNavigator';

import BrowseNavigator from './BrowseNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import AddProductNavigator from './AddProductNavigator';
import InboxNavigator from './InboxNavigator';

// import { colors } from '../styles';

const routes = {
  // [screens.HomeTab]: HomeNavigator,
  // [screens.DashboardTab]: DashboardNavigator,
  [screens.BrowseTab]: {
    screen: BrowseNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Browse',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="search" size={24} color={tintColor} />
      ),
    }),
  },

  [screens.FavoritesTab]: {
    screen: FavoritesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heart-o" size={24} color={tintColor} />
      ),
    }),
  },

  [screens.SellTab]: {
    screen: AddProductNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Sell',
      tabBarIcon: ({ tintColor }) => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            backgroundColor: '#FFFFFF',
            // backgroundColor: colors.white,
          }}
        >
          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              backgroundColor: '#44B2F1',
            }}
          > */}
          <FontAwesome name="camera" size={24} color={tintColor} />
        </View>
        // </View>
      ),
    }),
    tabBarOnPress: () => navigation.navigate('ModalScreen'),
  },

  [screens.InboxTab]: {
    screen: InboxNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'nbox',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="inbox" size={24} color={tintColor} />
      ),
    }),
  },

  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-person" size={24} color={tintColor} />
      ),
    }),
  },
};

const AppNavigator = createBottomTabNavigator(routes);

export default AppNavigator;
