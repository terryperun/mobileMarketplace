import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    // paddingRight: 0,
    // marginRight: 0,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCart: {
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    // backgroundColor: '#fff',
    // alignItems: 'center',
    marginLeft: 0,
    paddingLeft: 0,
  },
  chevronRight: {
    justifyContent: 'flex-end',
    // marginLeft: 100,
    paddingRight: 0,
    marginRight: 0,
  },
});

export default styles;
