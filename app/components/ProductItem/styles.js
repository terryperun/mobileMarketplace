import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 10,
    marginBottom: 0,
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    height: 250,
  },

  containerImage: {
    // width: '100%',
    backgroundColor: 'purple',
    flex: 1,
    // alignItems: 'stretch',
    // paddingLeft: 0,
    // paddingRight: 0,
    padding: 0,
  },

  image: {
    // width: '100%',
    flex: 1,
    width: 146,
    height: 146,
    // margin: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  containerTitle: {
    // flex: 1,
    backgroundColor: 'blue',
    paddingLeft: 5,
    height: 20,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    height: 27,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  containerIcon: {
    margin: 5,
    marginRight: 10,
  },

  containerPrice: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  text: {
    fontWeight: 'bold',
    width: 25,
  },
});

export default styles;
