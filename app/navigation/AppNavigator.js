import React from 'react';
import {
  createBottomTabNavigator,
  navigation,
} from 'react-navigation';
import { View } from 'react-native';
// import Icon from '@expo/vector-icons/FontAwesome';
import {
  EvilIcons,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';

import screens from './screens';
// import HomeNavigator from './HomeNavigator';
// import DashboardNavigator from './DashboardNavigator';
import ProfileNavigator from './ProfileNavigator';

import BrowseNavigator from './BrowseNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import AddProductNavigator from './AddProductNavigator';
import InboxNavigator from './InboxNavigator';

import { colors } from '../styles';

const routes = {
  // [screens.HomeTab]: HomeNavigator,
  // [screens.DashboardTab]: DashboardNavigator,
  [screens.BrowseTab]: {
    screen: BrowseNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Browse',
      tabBarIcon: ({ focused, tintColor }) =>
        (focused ? (
          <FontAwesome name="search" size={24} color={tintColor} />
        ) : (
          <Ionicons name="ios-search" size={24} color={tintColor} />
        )),
    }),
  },

  [screens.FavoritesTab]: {
    screen: FavoritesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Saved',
      tabBarIcon: ({ focused, tintColor }) =>
        (focused ? (
          <MaterialCommunityIcons
            name="bookmark"
            size={24}
            color={tintColor}
          />
        ) : (
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={24}
            color={tintColor}
          />
        )),
    }),
  },

  [screens.SellTab]: {
    screen: () => null,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => null,
      tabBarIcon: ({ tintColor }) => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            backgroundColor: '#2C3E50',
            position: 'absolute',
            // zIndex: 1,
            bottom: 18,
            // left: 0,
            // right: 0,
          }}
        >
          {/* <Icon name="camera" size={24} color={tintColor} /> */}
          <EvilIcons name="camera" size={39} color={colors.white} />
        </View>
      ),
      tabBarOnPress: () => navigation.navigate('AddProduct'),
    }),
  },

  [screens.InboxTab]: {
    screen: InboxNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ focused, tintColor }) =>
        (focused ? (
          <MaterialCommunityIcons
            name="inbox-arrow-down"
            size={24}
            color={tintColor}
          />
        ) : (
          <MaterialCommunityIcons
            name="inbox"
            size={24}
            color={tintColor}
          />
        )),
    }),
  },

  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused, tintColor }) =>
        (focused ? (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color={tintColor}
          />
        ) : (
          <MaterialCommunityIcons
            name="account-outline"
            size={24}
            color={tintColor}
          />
        )),
    }),
  },
};

const AppNavigator = createBottomTabNavigator(routes, {
  tabBarOptions: {
    activeTintColor: '#2E4052',
    style: {
      height: 48,
    },
  },
});

export default AppNavigator;
