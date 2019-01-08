import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.background,
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
