import React from 'react';
import {
  createBottomTabNavigator,
  navigation,
} from 'react-navigation';
import { View } from 'react-native';
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
} from '@expo/vector-icons';
import { Svg } from 'expo';

import screens from './screens';
import ProfileNavigator from './ProfileNavigator';
import BrowseNavigator from './BrowseNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import InboxNavigator from './InboxNavigator';

import Icon from '../components/Icon/Icon';
import { colors } from '../styles';
import s from './styles';

const routes = {
  [screens.BrowseTab]: {
    screen: BrowseNavigator,
    navigationOptions: () => ({
      tabBarLabel: 'Browse',
      tabBarIcon: ({ focused, tintColor }) => (
        <View style={s.styleTabs}>
          <Ionicons
            name={focused ? 'md-search' : 'ios-search'}
            size={24}
            color={tintColor}
          />
        </View>
      ),
    }),
  },

  [screens.FavoritesTab]: {
    screen: FavoritesNavigator,
    navigationOptions: () => ({
      tabBarLabel: 'Saved',
      tabBarIcon: ({ focused, tintColor }) => (
        <View style={s.styleTabs}>
          <MaterialCommunityIcons
            name={focused ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color={tintColor}
          />
        </View>
      ),
    }),
  },

  [screens.SellTab]: {
    screen: () => null,
    navigationOptions: () => ({
      tabBarLabel: () => null,
      tabBarIcon: () => (
        <View style={s.fabContainer}>
          <Svg width="84" height="52" fill="none" version="1">
            <Svg.Path
              fill={colors.icon}
              fillRule="evenodd"
              d="M0 0h84v52H0V0zm42 36c19 0 35-14 36-33 0-2 1-3 3-3H3c2 0 3 1 3 3 0 19 16 33 36 33z"
            />
          </Svg>
          <View style={s.button}>
            <EvilIcons name="camera" size={39} color={colors.white} />
          </View>
        </View>
      ),
      tabBarOnPress: ({ navigation }) =>
        navigation.navigate('AddProduct'),
    }),
  },

  [screens.InboxTab]: {
    screen: InboxNavigator,
    navigationOptions: () => ({
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ focused, tintColor }) => (
        <View style={s.styleTabs}>
          {/* <Icon iconName="inbox"  /> */}
          <MaterialCommunityIcons
            name={focused ? 'inbox-arrow-down' : 'inbox'}
            size={24}
            color={tintColor}
          />
        </View>
      ),
    }),
  },

  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: () => ({
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused, tintColor }) => (
        <View style={s.styleTabs}>
          <Icon iconName={focused ? 'profile' : 'profile-outline'} />
          {/* <MaterialCommunityIcons
            name={focused ? 'account' : 'account-outline'}
            size={24}
            color={tintColor}
          /> */}
        </View>
      ),
    }),
  },
};

const AppNavigator = createBottomTabNavigator(routes, {
  tabBarOptions: {
    activeTintColor: '#2E4052',
    // inactiveTintColor: '#34495E',
    style: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'transparent',
      left: 0,
      right: 0,
      height: 52,
      borderTopWidth: null,
    },
  },
});

export default AppNavigator;
