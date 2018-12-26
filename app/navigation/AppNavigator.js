import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
// import Icon from '@expo/vector-icons/FontAwesome';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import screens from './screens';
import HomeNavigator from './HomeNavigator';
// import DashboardNavigator from './DashboardNavigator';
import ProfileNavigator from './ProfileNavigator';

import BrowseNavigator from './BrowseNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import SellNavigator from './SellNavigator';
import InboxNavigator from './InboxNavigator';

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
    screen: SellNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Sell',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="camera" size={24} color={tintColor} />
      ),
    }),
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
