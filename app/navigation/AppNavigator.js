import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
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
      tabBarLabel: ({ focused, tintColor }) => (
        <View style={s.containerLabelText}>
          <Text
            style={[
              { color: tintColor },
              s.styleLabelText,
              focused && s.boldText,
            ]}
          >
            Browse
          </Text>
        </View>
      ),
      tabBarIcon: ({ focused }) => (
        <View style={s.styleTabs}>
          <Icon iconName={focused ? 'search' : 'search-outline'} />
        </View>
      ),
    }),
  },

  [screens.FavoritesTab]: {
    screen: FavoritesNavigator,
    navigationOptions: () => ({
      tabBarLabel: ({ focused, tintColor }) => (
        <View style={s.containerLabelText}>
          <Text
            style={[
              { color: tintColor },
              s.styleLabelText,
              focused && s.boldText,
            ]}
          >
            Saved
          </Text>
        </View>
      ),
      tabBarIcon: ({ focused }) => (
        <View style={s.styleTabs}>
          <Icon iconName={focused ? 'saved' : 'saved-outline'} />
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
            <Icon iconName="camera" color="white" />
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
      tabBarLabel: ({ focused, tintColor }) => (
        <View style={s.containerLabelText}>
          <Text
            style={[
              { color: tintColor },
              s.styleLabelText,
              focused && s.boldText,
            ]}
          >
            Inbox
          </Text>
        </View>
      ),
      // tabBarLabel: 'Inbox',
      tabBarIcon: ({ focused }) => (
        <View style={s.styleTabs}>
          <Icon iconName={focused ? 'inbox' : 'inbox-outline'} />
        </View>
      ),
    }),
  },

  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: () => ({
      tabBarLabel: ({ focused, tintColor }) => (
        <View style={s.containerLabelText}>
          <Text
            style={[
              { color: tintColor },
              s.styleLabelText,
              focused && s.boldText,
            ]}
          >
            Profile
          </Text>
        </View>
      ),
      tabBarIcon: ({ focused }) => (
        <View style={s.styleTabs}>
          <Icon iconName={focused ? 'profile' : 'profile-outline'} />
        </View>
      ),
    }),
  },
};

const AppNavigator = createBottomTabNavigator(routes, {
  tabBarOptions: {
    activeTintColor: '#2E4052',
    inactiveTintColor: '#34495E',
    labelStyle: {
      backgroundColor: 'white',
      // color: 'red',
    },
    activeLabelStyle: {
      fontWeight: 'bold',
      // fontWeight: 'bold',
    },
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
