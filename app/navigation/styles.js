import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.background,
  },

  boldText: {
    fontWeight: 'bold',
  },

  containerLabelText: {
    // flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: ,
    // fontFamily: 'roboto',
    // fontWeight: 'normal',
  },

  styleLabelText: {
    fontSize: 12,
  },

  styleTabs: {
    // flex: 1,
    backgroundColor: colors.white,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    // paddingTop: 4,
    alignItems: 'center',
    // height: 70,
    left: 0,
    right: 0,
  },

  fabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    backgroundColor: colors.tabBar,
  },
  tabBar: {
    height: 52,
    flexDirection: 'row',
  },
  button: {
    // backgroundColor: colors.primary,
    backgroundColor: '#2C3E50',
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    bottom: 23,
    left: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
